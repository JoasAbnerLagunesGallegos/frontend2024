export const getCountryData = async () => {
    const key = 'c3b8c047-a07e-4517-937e-738b2471844d'

    const url = `https://holidayapi.com/v1/countries?pretty&key=${key}`

    const response = await fetch(url)
    const countryData = await response.json()

    return countryData
}