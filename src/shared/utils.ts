import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(utc)
dayjs.extend(AdvancedFormat)

export const V_CR_KEY = "XL48RQQY7M84CDS92HV6S5TW5"

export function visualCrossingUrl(city: string) {
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${V_CR_KEY}&contentType=json`
}

export function reverseGeocodingUrl(latitude: number, longitude: number) {
    return `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
}

export const wordToEmoji: { [key: string]: string } = {
    "snow": "\u2744",                 // ❄️ 
    "rain": "\u{1F327}",              // 🌧️
    "partly-cloudy-day": "\u{26C5}",  // ⛅️
    "partly-sunny-day": "\u{1F324}",  // 🌤️
    "clear-day": "\u{2600}",          // ☀️
    "partly-rainy-day": "\u{1F326}",  // 🌦️
    "cloudy": "\u{2601}",             // ☁️
    "clear-night": "\u{1F319}",       // 🌙 (Half moon with stars)
    "partly-cloudy-night": "\u{2601}", // 🌜 (Cloud with moon)
    "fog": "\u{1F32B}",               // 🌫️ (Fog)
    "wind": "\u{1F4A8}"               // 💨 (wind)
  }

export function formatDate(date: string): string {
    return dayjs(date).format("dddd Do of MMMM")
}

export function parseConditions(icon: string): any {
    return wordToEmoji[icon] || icon
}

export function filterNextHours(todayData: any, weatherData: any): Array<any> {
    const currentTime = dayjs().utc().add(weatherData.tzoffset, 'hours').format("HH")
    return todayData.hours.filter(
        (hour: any) => hour.datetime >= currentTime
        )
    }
