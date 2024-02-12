import ListItem from "./ListItem"

const agenda = [

  {
    nombre: 'Juan Aguilar',
    correo: 'juancaballo@gmail.com',
    número_telefónico: '123456789',
    cargo: 'Granjero'
  },

  {
    nombre: 'Pedro Estacionador',
    correo: 'manspider@gmail.com',
    número_telefónico: '123644710',
    cargo: 'Definitivamente no el hombre araña'
  },

  {
    nombre: 'Duende Verde',
    correo: 'spidey2001@gmail.com',
    número_telefónico: '2469132469',
    cargo: 'Exterminador de arañas'
  }

]

function App() {

  return (
    
    <div> 
        <h1>Agenda Personal</h1>
        <hr />
        <ul>
          {
            agenda.map((agen)=>(
              <ListItem 
              key={agen.nombre}
              nombre={agen.nombre}
              correo={agen.correo}
              número_telefónico={agen.número_telefónico}
              cargo={agen.cargo}
              />
            ))
          }
        </ul>
      </div>
       
  )
}

export default App
