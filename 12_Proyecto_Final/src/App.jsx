import { useState } from "react"
import { CountryHoliday } from "./components/Countries"
import SearchCountry from "./components/SearchCountry"
import "./assets/index.css"

function App() {

  const [countries, setCountry] = useState([""])

  return (
    <>
    <div className="container">
      <h2>Holiday API - Every country holiday of the year 2023!</h2>
      <hr />
      <SearchCountry countries={countries} setCountry={setCountry} />
      {
        countries.map((country, index) => (
          <CountryHoliday key={index} country={country} />
        ))
      }
      </div>
    </>
  )
}

export default App
