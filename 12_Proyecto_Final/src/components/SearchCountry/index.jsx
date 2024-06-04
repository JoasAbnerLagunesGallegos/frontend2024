import { useForm } from "../Hooks/useForm"
import Swal from 'sweetalert2'
import ListModal from "./ListModal"
import { getCountryData } from "../../API/CountryAPI"
import { useEffect, useState } from "react"

const SearchCountry = ({ setCountry }) => {

  const [values, handleInputChange, reset] = useForm({
    country: ''
  })

  const [countries, setCountries] = useState(null)

  useEffect(() => {
    const getCountryCodes = async () => {
      const countryData = await getCountryData()
      const countriesInfo = countryData.countries.map(countryData => ({
        name: countryData.name,
        code: countryData.code,
        flag: countryData.flag
      }))

      setCountries(countriesInfo)
    }

    getCountryCodes()
  }, [])

  const handleSearchCountry = () => {

    //Error si no se da ningun dato con sweetalert
    if (!values.country) {
      Swal.fire({
        icon: "error",
        title: "Failed to retrieve holiday data...",
        text: "No country code was provided!",
        footer: 'Please check the country code section'
      });
    }

    const newCountry = [values.country]
    setCountry(newCountry)
    
  }


  return (

    <div className="input-group">

      <span
        className="input-group-text">
        <i className="bi bi-globe-americas"></i>
        Search by  country code:
      </span>

      <input
        id="country"
        name="country"
        onChange={handleInputChange}
        type="text"
        className="form-control"
        value={values.country} />

      <div>
        {countries && <ListModal countries={countries} />}
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#listModal">
          <i className="bi bi-list-task"></i>
          Codes
        </button>
      </div>

      <button
        className="btn btn-primary"
        type="button"
        onClick={handleSearchCountry}>
        <i className="bi bi-search"></i>
        Search
      </button> <br />      

      { countries && 
         <div className="container card-body text-center">
        <h4>SELECTED COUNTRY:  <img src={`https://flagsapi.com/${values.country}/flat/64.png`} alt="No country selected / missing country flag"/></h4>
        </div>
      }

    </div>

    

  )
}

export default SearchCountry