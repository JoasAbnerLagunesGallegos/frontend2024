export const getWeather = async () => {
    const key = "09281c8e0bf4403397e170855243004"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=yes&lang=es`
    const response = await fetch(url)
    const weather = await response.json()

    return weather
}