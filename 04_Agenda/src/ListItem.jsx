const ListItem = ({nombre,correo,número_telefónico,cargo}) =>{

    return(
    
        <li>Nombre: {nombre}
        <ul>Correo: {correo}</ul>
        <ul>Número de teléfono: {número_telefónico}</ul>
        <ul>Cargo: {cargo}</ul>
        </li>

    )
    
    }
    
    export default ListItem