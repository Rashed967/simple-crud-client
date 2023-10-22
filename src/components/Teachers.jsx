import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Teachers = () => {
    const teachers = useLoaderData()
    return (
        <div>
            <h2>All Teacher : {teachers.length}</h2>
            {
                teachers.map(teacher => <p key={teacher._id}>{teacher.name}, {teacher.email}</p>)
            }
        </div>
    );
};

export default Teachers;