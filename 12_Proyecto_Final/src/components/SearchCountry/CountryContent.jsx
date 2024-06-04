import PropTypes from "prop-types"

const CountryContent = ({ holiday, country}) => {

    let holidays = holiday.holidays.map(holiday => ({ 
        name: holiday.name, 
        date: holiday.date, 
        dayName: holiday.weekday.date.name
    }));

    localStorage.setItem("Historial", country);


    const style = '#2B2B2B'

    return (
        <>
            <div className="card-body text-center text-white" style={{backgroundColor:style}}>
                <h2>Current country code: {country}</h2>
                <ul className="">
                    {
                    holidays.map((holiday, index) => (
                        <p key={index}>
                            <i className="bi bi-info-circle"></i> {holiday.name} 
                             {" - - - "}<i className="bi bi-calendar3"></i> {holiday.dayName} {""} {holiday.date}
                        </p>
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