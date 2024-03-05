import { useState } from "react"
import "./app.css"

const numberButtonsClasses='btn btn-secondary w-100'
const operatorButtonsClasses='btn btn-warning w-100'
const specialButtonsClasses='btn btn-danger w-100'

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

if(display.operator === '%'){
result = eval(`${display.previousValue} /100 * ${display.value}`)
} else {
result = eval(`${display.previousValue} ${display.operator} ${display.value}`)
}

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
    value : value,
    hasPoint: false
  })

}

const limit = (string='', lenght = 10)=>{
  return string.slice(0, lenght)
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

            <tr>
              <td> <button className={specialButtonsClasses} type="button" onClick={() => resetDisplay('0')}>C</button>
              </td>
              <td> <button className={specialButtonsClasses} type="button" onClick={deleteLastCharacter}>{'<'}</button>
              </td>
              <td> <button className={operatorButtonsClasses} type="button" onClick={() => setOperator('%')}>%</button>
              </td>
              <td> <button className={operatorButtonsClasses} type="button" onClick={() => setOperator('/')}>/</button>
              </td>
            </tr>

            <tr>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('7')}>7</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('8')}>8</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('9')}>9</button>
              </td>
              <td> <button className={operatorButtonsClasses} type="button" onClick={() => setOperator('*')}>X</button>
              </td>
            </tr>

            <tr>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('4')}>4</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('5')}>5</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('6')}>6</button>
              </td>
              <td> <button className={operatorButtonsClasses} type="button" onClick={() => setOperator('-')}>-</button>
              </td>
            </tr>

            <tr>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('1')}>1</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('2')}>2</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('3')}>3</button>
              </td>
              <td> <button className={operatorButtonsClasses} type="button" onClick={() => setOperator('+')}>+</button>
              </td>
            </tr>

            <tr>
              <td className='text-center' colspan={2}>
                <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('0')}>0</button>
              </td>
              <td> <button className={numberButtonsClasses} type="button" onClick={() => updateDisplay('.')}>.</button>
              </td>
              <td> <button className={specialButtonsClasses} type="button" onClick={calculate}>=</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

  )
}

export default App
