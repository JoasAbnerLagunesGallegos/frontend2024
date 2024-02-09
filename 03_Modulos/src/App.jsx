
import ListItem from "./assets/listitem"

const links = [

  {
    name: 'Google',
    url: 'https://wwww.google.com'
  },

  {
    name: 'Facebook',
    url: 'https://wwww.facebook.com'
  },

  {
    name: 'Youtube',
    url: 'https://wwww.youtube.com'
  }

]

function App() {


  return (
   
      <div> 
        <h1>Catálogo de links</h1>
        <hr />
        <ul>
          {
            links.map((link)=>(
              <ListItem 
              key={link.name}
              name={link.name}
              url={link.url}
              />
            ))
          }
        </ul>
      </div>
       
  )
}

export default App
