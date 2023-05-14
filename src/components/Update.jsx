/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUsers = useLoaderData()
    
    const handelUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email}

        fetch(`http://localhost:3000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount> 0){
                alert('user update successfully')
            }
        })
    }
    
    return (
        <div>
            <h1>update information of{loadedUsers.name}</h1>

            <form onSubmit={handelUpdate}>
                <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;