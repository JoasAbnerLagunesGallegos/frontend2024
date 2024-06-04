const CountryPlaceHolder = () => {

    const style = '#2B2B2B'
    const style2 = '#5D5C5C'
    var Historial = localStorage.getItem("Historial");

    return (
        <>
            <div className="card-body text-center text-white" style={{ backgroundColor: style }}>
                <h2>Please introduce a country code ^^</h2>
                <p>By default this website won't have a country selected, you'll need to pick one that is</p>
                <p>available in the "Codes" button above.</p>
            </div>

            {
                <div className="card-body text-center text-white" style={{ backgroundColor: style2 }}>
                    <img src={`https://flagsapi.com/${Historial}/flat/64.png`} width="50" height="40"/>
                    <p>LAST SEARCH: {Historial}</p>
                </div>
            }
        </>
    )
}

export default CountryPlaceHolder