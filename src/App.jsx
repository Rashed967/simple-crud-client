import './App.css'

const App = () => {
  
  // add user function 
  const addUser = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    
    // fetch with post method 
    fetch('http://localhost:5000/teachers', {
      method : "POST", 
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert("Teacher profile created")
        form.reset()
      }
    })
    .catch(error => console.error(error))
    
  }
  return (
    <div>
      <h2>Simple CRUD operation</h2>
      <form onSubmit={addUser}>
      <input type="text" name="name" id="name" />
      <br />
      <input type="email" name="email" id="email" />
      <br />
      <input type="submit" value="Add Teacher" />
      </form>
    </div>
  );
};

export default App;