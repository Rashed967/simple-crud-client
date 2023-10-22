import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Update = () => {
    const loadedData = useLoaderData()

    // update data 
    const updateDate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email}
        fetch(`http://localhost:5000/teachers/${loadedData._id}`,{
            method : "PUT",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert("data updated successfully")
            }
        })
        .catch(error => console.error(error))
    }
   
    return (
        <div>
            <h2>Teacher profle update for {loadedData.name}</h2>
            <form onSubmit={updateDate}>
                <input type="text" name="name" id="name" defaultValue={loadedData ? loadedData.name : ""}/>
                <br />
                <input type="email" name="email" id="email" defaultValue={loadedData ? loadedData.email : ""} />
                <br />
                <input type="submit" value="update data" />
            </form>
        </div>
    );
};

export default Update;