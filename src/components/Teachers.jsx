import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Teachers = () => {
    const loadedteachers = useLoaderData()
    const [teachers, setTeachers] = useState(loadedteachers)
   
    // handle delete button 
    const deleteTeacher = (id) => {
        fetch(`http://localhost:5000/teachers/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                const filteredTeacher = teachers.filter(teacher => teacher._id !== id)
                setTeachers(filteredTeacher)
                alert("profile deleted successfully")
                
            }
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <h2>Total Teacher : {teachers.length}</h2>
            {
                teachers.map(teacher => <p key={teacher._id}>{teacher.name}, {teacher.email}, {teacher._id} 
                <Link to={`/update/${teacher._id}`}>
                    <button>update</button>
                </Link>
                <button onClick={() => deleteTeacher(teacher._id)}>X</button>
                </p>)
            }
           
        </div>
    );
};

export default Teachers;