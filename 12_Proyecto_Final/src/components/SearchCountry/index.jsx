import { useForm } from "../Hooks/useForm"
import Swal from 'sweetalert2'

const SearchCountry = ({ setCountry, holiday }) => {
  const [values, handleInputChange, reset] = useForm({
    country: ''
  })

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
    reset()
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

        <button
          type="button"
          className="btn btn-success">
          <i className="bi bi-list-columns-reverse"></i>
          Codes
        </button>
        
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleSearchCountry}>
        <i className="bi bi-search"></i>
        Search
      </button>
    </div>
  )
}

export default SearchCountry