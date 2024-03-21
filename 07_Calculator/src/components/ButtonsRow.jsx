import { Button } from "./Button"

export const ButtonsRow = ({row, buttonsfunctions}) =>{
    return(
        <tr>
            {
                row.map((button)=>{
                    return(
                        <Button 
                        key={button.label}
                        buttonsfunctions={buttonsfunctions}
                        {...button}
                        />
                    )
                })
            }
        </tr>
    )
}
ButtonsRow.prototype={
    row: 'array',
    buttonsfuctions:'object'
}