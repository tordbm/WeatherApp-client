import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import { Tooltip } from 'bootstrap'
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'

dayjs.extend(utc)
dayjs.extend(AdvancedFormat)
const user = useUserStore()
// prettier-ignore
export function visualCrossingUrl(city: string) {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${import.meta.env.VITE_VC_API_KEY}&contentType=json`
}

export const FAST_API_URL = 'https://evil-caty-monclair-3848f875.koyeb.app'

export function reverseGeocodingUrl(latitude: number, longitude: number) {
  return `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
}

export const wordToEmoji: { [key: string]: string } = {
  snow: '\u2744', // ❄️
  rain: '\u{1F327}', // 🌧️
  'partly-cloudy-day': '\u{26C5}', // ⛅️
  'partly-sunny-day': '\u{1F324}', // 🌤️
  'clear-day': '\u{2600}', // ☀️
  'partly-rainy-day': '\u{1F326}', // 🌦️
  cloudy: '\u{2601}', // ☁️
  'clear-night': '\u{1F319}', // 🌙
  'partly-cloudy-night': '\u{2601}', // 🌜
  fog: '\u{3030}', // 〰️
  wind: '\u{1F4A8}', // 💨
}

export const conditionsToText: { [key: string]: string } = {
  snow: 'Snow',
  rain: 'Rain',
  'partly-cloudy-day': 'Partly Cloudy Day',
  'partly-sunny-day': 'Partly Sunny Day',
  'clear-day': 'Sunny',
  'partly-rainy-day': 'Partly Rainy Day',
  cloudy: 'Cloudy',
  'clear-night': 'Clear Night',
  'partly-cloudy-night': 'Partly Cloudy Night',
  fog: 'Fog',
  wind: 'Wind',
}

export function formatDate(date: string): string {
  return dayjs(date).format('dddd Do of MMMM')
}

export function formatDateShort(date: string): string {
  return dayjs(date).format('ddd Do MMMM')
}

export function formatDateTime(date: string): string {
  return dayjs(date).format('HH:mm DD.MM.YYYY')
}

export function parseConditions(icon: string) {
  return wordToEmoji[icon] || icon
}

export function parseConditionsToText(icon: string) {
  return conditionsToText[icon] || icon
}

export function showPrecip(precip: number): string {
  return parseFloat(precip.toFixed(1)) > 0 ? precip.toFixed(1) + ' mm' : ' '
}

export function filterNextHours(todayData: any, weatherData: any): Array<any> {
  const currentTime = dayjs()
    .utc()
    .add(weatherData.tzoffset, 'hours')
    .format('HH')
  return todayData.hours.filter((hour: any) => hour.datetime >= currentTime)
}

export function initTooltips(ref: string) {
  return function (this: any) {
    const tooltips: HTMLElement[] | undefined = this.$refs[ref] as
      | HTMLElement[]
      | undefined
    if (tooltips) {
      tooltips.forEach((tooltip: HTMLElement) => {
        new Tooltip(tooltip)
      })
    }
  }
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = "expires="+d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export function getCookie(cname: string) {
  let name = cname + "="
  let ca = document.cookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

export function deleteCookie(cname: string) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;'
}

export function checkExistsCookie(): boolean {
  let cookie: any = getCookie("accesstoken")
  return cookie !== "" && cookie !== null
}

export async function me() {
  if (!checkExistsCookie) {
    return
  }
  try {
    const access_token = getCookie('accesstoken')
    const userInfoResponse: any = await axios
      .get(`${FAST_API_URL}${'/users/me'}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
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
  } catch (_) {
    return
  }
}

export async function hashString(str: string | null): Promise<string> {
  if (!str) {
    return ''
  }
  
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  
  return hashHex
}
