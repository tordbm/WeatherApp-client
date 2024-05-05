import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import { Tooltip } from 'bootstrap'

dayjs.extend(utc)
dayjs.extend(AdvancedFormat)

const V_CR_KEY = 'XL48RQQY7M84CDS92HV6S5TW5'

export function visualCrossingUrl(city: string) {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${V_CR_KEY}&contentType=json`
}

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
