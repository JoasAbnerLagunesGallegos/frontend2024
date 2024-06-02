import PropTypes from "prop-types"

const CountryContent = ({ holiday, country }) => {

    let holidays = holiday.holidays.map(holiday => ({ 
        name: holiday.name, 
        date: holiday.date, 
        dayName: holiday.weekday.date.name,
        dayNumber: holiday.weekday.date.numeric,
    }));

    return (
        <>
            <div className="card-body text-center">
                <h2>Current country code: {country}</h2>
                <ul className="alingleft">
                    {
                    holidays.map((holiday, index) => (
                        <li key={index}>
                            Holiday name: {holiday.name} 
                             {" "}/ Date: {holiday.date}
                             {" "}/ Specific day: {holiday.dayName} {holiday.dayNumber}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

CountryContent.propTypes = {
    holiday: PropTypes.object.isRequired
}

export default CountryContent