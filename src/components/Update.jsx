import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData()

    // update profile 
    const updateData = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user =  {name, email}
        console.log(user)
        fetch(`http://localhost:5000/teachers/${loadedUser._id}`,{
            method : "PUT",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert("profile updated successfully")
            }
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div>
            <h3>Update Teacher profile for {loadedUser.name}</h3>
            <form onSubmit={updateData}>
                <input type="text" name="name" id="name" defaultValue={loadedUser ? loadedUser.name : ""}/>
                <br />
                <input type="email" name="email" id=""  defaultValue={loadedUser ? loadedUser.email : ""} />
                <br />
                <input type="submit" value="update user" />
            </form>

        </div>
    );
};

export default Update;