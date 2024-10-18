import  { useState, useEffect } from "react";
import { deleteUser, listUsers } from "../services/UserService" ;
import { useNavigate } from "react-router-dom";

const ListUser = () => {

 const [users,setUsers] =  useState ([])


 const navigator = useNavigate ()

 useEffect(() => {
  getAllUsers()
  }, []);

  function getAllUsers() {
    listUsers()
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  function addUser()  {
  navigator  ("/add-user") ;

  }
  function updateUser (id) {
    navigator (`/update-user/${id}`)
  }
 
  function handleDelete (id) {
    deleteUser(id).then(( response ) => {
      getAllUsers()
      
  }).catch(error=>{
      console.error(error)
  })


  }
  



  return (
    <div className="container">
      <h2 className="text-center"> List of User</h2>
        <button type="button" className="btn btn-primary" onClick={addUser}>add user</button>

        <table className="table  table-striped">
            <thead>
                <tr>
                <th>id</th>
                    <th>first name</th>
                    <th>last name</th> 
                     <th>email</th>
                     <th>password</th>
                     <th>actions</th>
                </tr>
            </thead>

    <tbody>
    { 
        users.map( user=> 
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td> 
                  
                   <button type="button"
                    className="btn btn-secondary" 
                   onClick={ () => updateUser(user.id)}>Update</button>
                   <button type="button"
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(user.id) }
                   >Delete</button>

                   </td>

            </tr>
        )
    }
      
    </tbody>


        </table>
    </div>
  )
}

export default ListUser