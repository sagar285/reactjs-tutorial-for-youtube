import useCustomhook from "./component/useCustomhook"

const App = () => {
 const [state] =useCustomhook("https://jsonplaceholder.typicode.com/users")
  
  return (

    <div>

      {
        state.map((a)=>{
          return <h1>{a.name}</h1>
        })
      }
    </div>
  )
}

export default App