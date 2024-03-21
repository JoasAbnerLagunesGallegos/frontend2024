import { buttonsClasses } from "../assets/buttonsClasses"
export const Button = ({
  class: buttonClass,
  label,
  function: buttonfunction,
  columns,
  buttonsfunctions
}) => {

  return (
    <td colSpan={columns}>
    <button 
    type='button' 
    className={buttonsClasses[buttonClass]} 
    onClick={() => buttonsfunctions[buttonfunction](label)}
    >
        {label}
    </button>
    </td>
  )
}

Button.prototype ={
  class: 'string',
  label: 'string',
  function: 'string',
  columns: 'number',
  buttonsfunctions: 'object'
}
