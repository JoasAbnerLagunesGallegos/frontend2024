import { useEffect, useState } from "react"
import { getHoliday } from "../API/HolidayAPI"
import CountryContent from "./SearchCountry/CountryContent"
import CountryPlaceHolder from "./SearchCountry/PlaceHolder"

export const CountryHoliday = ({ country }) => {

    const [holiday, setHoliday] = useState(null)

    useEffect(() => {
        const getCountryHolidays = async () => {
            setHoliday(await getHoliday(country))
        }

        getCountryHolidays()
    }, [country])

    return (
        <div className='col-1 card m-2' style={{ width: '68rem' }}>
            {
                holiday ?
                    <CountryContent holiday={holiday} country={country}/> :
                    <CountryPlaceHolder />
            }
        </div>
    )
}

export default CountryHoliday