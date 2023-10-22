
import './App.css'

function App() {


  const handleUser = (event) => {
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    
    // post users 
    fetch('http://localhost:5000/teachers',{
      method : "POST",
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log("data updated", data)
      if(data.insertedId){
        alert("data added successfully")
        form.reset()
      }
    })
    .catch(error => console.error(error))

  }
 

  return (
    <>
      
      <h1>Simple Crud server</h1>

      <form onSubmit={handleUser}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
      
    </>
  )
}

export default App
