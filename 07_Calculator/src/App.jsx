import { useState } from "react"
import "./app.css"
import { buttons } from "./assets/buttons"
import { ButtonsRow } from "./components/ButtonsRow"

function App() {
const [display,setDisplay] = useState({
  value:'0',
  hasPoint: false,
  previousValue: '0',
  operatorHasBeenPressed: false,
  operator: ''
})

const updateDisplay =(value) => {
if(value === '.'){
  if(display.hasPoint){
    return
  }
  setDisplay({
    ...display,
    value: limit(display.value + value),
    hasPoint: true
  })
  return
}

  if(display.value === '0'){
    setDisplay({
      ...display,
      value: limit(value)
    })
  } else {
  setDisplay({
    ...display,
    value: limit(display.value + value)
  })
}
}

const deleteLastCharacter = () =>{

setDisplay({
  ...display,
  value: display.value.slice(0,-1)
})

if(display.value.slice(-1) === '.'){
 setDisplay({
  ...display,
  value: display.value.slice(0,-1),
  hasPoint:false
 })
}

if(display.value.length===1){
  setDisplay({
    ...display,
    value:'0',
    hasPoint:false
  })
}
}

const setOperator = (operator) =>{
setDisplay({
  ...display,
  previousValue: display.value,
  operatorHasBeenPressed: true,
  hasPoint: false,
  value: '0',
  operator: operator
})
}

const calculate = () =>{
  if(!display.operatorHasBeenPressed){
    return
  }

let result = 0

let operator = display.operator === '%' ? '/ 100 *' :
display.operator === 'X' ? '*': display.operator

result = eval(`${display.previousValue} ${operator} ${display.value}`)

result = result + ""

setDisplay({
  ...display,
  value: limit(result),
  operatorHasBeenPressed: false,
  hasPoint: result.includes("."),
  previousValue: '0'
})
}

const resetDisplay=(value)=>{
  setDisplay({
    ...display,
    value : '0',
    hasPoint: false
  })

}

const limit = (string='', lenght = 10)=>{
  return string.slice(0, lenght)
}

const buttonsfunctions = {
  updateDisplay,
  resetDisplay,
  setOperator,
  calculate,
  deleteLastCharacter
}

  return (

      <div>
        <h1>Calculator</h1>
        <hr />
        <table className="center">
          <tbody>
            <tr>
              <td className='text-end' colspan={4}> 
              <h2>{display.value}</h2>
              </td>
            </tr>

            {
              buttons.map((row, index) => {
                return(
                  <ButtonsRow 
                  key={index} 
                  row={row}
                  buttonsfunctions={buttonsfunctions}
                  />
                )
              })
            }

          </tbody>
        </table>
      </div>

  )
}

export default App
