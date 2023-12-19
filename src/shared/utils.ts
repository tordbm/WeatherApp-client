import dayjs from "dayjs";

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
  };

export function formatDate(date: string): string {
    return dayjs(date).format("ddd DD");
}

export function parseConditions(icon: string): any {
    return wordToEmoji[icon];
}