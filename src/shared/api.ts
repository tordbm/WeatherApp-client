import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import { getCookie, hashString, setCookie } from './utils'
import qs from 'qs'

axios.defaults.baseURL = 'https://evil-caty-monclair-3848f875.koyeb.app'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const user = useUserStore()

export async function login(username: string, password: string) {
    const hashedPassword = await hashString(password)
    const data = qs.stringify({
        grant_type: '',
        username: username,
        password: hashedPassword,
        scope: '',
        client_id: '',
        client_secret: '',
        })
  const tokenResponse: any = await axios.post('/token',
    data,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
  setCookie('accesstoken', tokenResponse.data.access_token, 1440)
  return tokenResponse.data
}

export async function me() {
    const accesstoken = getCookie('accesstoken')
    if (!accesstoken) {
      return
    }
    const userInfoResponse: any = await axios.get('/users/me/', {
        headers: {
        Authorization: `Bearer ${accesstoken}`,
        },
    })
    user.currentUser = {
        id: userInfoResponse.data.id,
        username: userInfoResponse.data.username,
        email: userInfoResponse.data.email,
        created_at: userInfoResponse.data.created_at,
        disabled_at: userInfoResponse.data.disabled_at,
        disabled: userInfoResponse.data.disabled,
    }
}

export async function getMyFavoredCities() {
    const access_token = getCookie('accesstoken')
      const favoredCities = await axios.get('/users/me/cities/',
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
    return favoredCities.data
}



export async function signup(username: string, email: string, password: string) {
    const hashedPassword = await hashString(password)
    const data = {
      username: username,
      email: email,
      password: hashedPassword,
    }
    await axios.post('/create_user/', data)
}

export async function addFavoredCity(address: string) {
    const accesstoken = getCookie('accesstoken')
    const response = await axios.post('/add_favorite_city/',
        {
          city:
            address.charAt(0).toUpperCase() +
            address.slice(1),
        },
        { headers: { Authorization: `Bearer ${accesstoken}` } }
      )
      return response.data
}

export function deleteFavoredCity(favored_id: string) {
    const accesstoken = getCookie('accesstoken')
    axios.delete(
        `/delete_favored_city/?favored_id=${favored_id}`,
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
        }
      )
}