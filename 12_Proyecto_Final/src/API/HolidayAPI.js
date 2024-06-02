export const getHoliday = async (country) => {
    const key = 'c3b8c047-a07e-4517-937e-738b2471844d'
    const url = `https://holidayapi.com/v1/holidays?pretty&country=${country}&year=2023&key=${key}`
    const response = await fetch(url)
    const holiday = await response.json()
    
    return holiday
}
