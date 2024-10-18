import {useEffect, useState} from "react"
import { createUser, getUser, updateUser } from "../services/UserService"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const User = () => {

    const [firstName,setFirstName] = useState ('')
    const [ lastName,setLastName] = useState ('')
    const [email,setEmail] = useState ('')
    const [password,setPassword] = useState ('')
    const [role,setRole] = useState (0)
    const {id} = useParams()

    const [errors,setErrors] = useState ({
        firstName :'' ,
        lastName : '' ,
        email:'' ,
        password : ''}
    )

    const navigator = useNavigate()

    useEffect (()=> {
        if(id) {
            getUser(id).then((response)=>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setPassword(response.data.password)
            }).catch( error => {
                console.error(error)
            })
        }

    },[id])


    
    function saveOrUpdateUser (e) {
        e.preventDefault() ;
        if(validateForm()){

            const user = {firstName, lastName , email,password,role}

            console.log(user)

if(id) {
    updateUser(id,user).then((response)=>{
        console.log(response.data) 
        navigator("/user") 

    }).catch(error=>{
        console.error(error)
    })

}else {
 
    createUser(user).then(response => {
        console.log(response.data)
    } ).catch(error=>{
        console.error(error)
    })
    navigator("/user") 
    
}
}

           

        
        

    }

function validateForm() {
    let valid = true
    const errorsCopy = {... errors}

    if (firstName.trim()) {
        errorsCopy.firstName  = ''
    } else {
        errorsCopy.firstName = 'first name is required'
     valid = false
    }

    if (lastName.trim()) {
        errorsCopy.lastName  = ''
    }else {
    errorsCopy.lastName = 'last name is required'
     valid = false
    }

    if (email.trim()) {
        errorsCopy.email  =''
    }else {
    errorsCopy.email = 'email is required'
     valid = false
    }

    if (password.trim()) {
        errorsCopy.password  =''
    }else {
    errorsCopy.password = 'password is required'
     valid = false
    }

setErrors(errorsCopy)
return valid
}


function title () {
    if (id) {
      return         <h2 className="text-center"> update  User</h2>
  
    }
    else {
      return         <h2 className="text-center"> add  User</h2>
  
    }
  }

  return (


    <div className="card">
  <div className="card-body">
    {title()}
  <form>
  <div className="form-group">
    <label htmlFor="firstName">firstName</label>
    <input type="text"
    className={`form-control ${errors.firstName ? 'is-invalid' : ''} `}
    value={firstName}
    onChange={ (e) => setFirstName(e.target.value)}
    id="firstName"
     aria-describedby="firstNameHelp"
      placeholder="Enter firstName"/>

      {errors.firstName && <div className="invalid-feedback"> {errors.firstName } </div>}
      
  </div>


  <div className="form-group">
    <label htmlFor="lastName">lastName</label>
    <input type="text"
    className={`form-control ${errors.lastName ? 'is-invalid' : ''} `}

    value={lastName}
    onChange={(e)=>setLastName(e.target.value)}
    id="lastName"
      placeholder="Enter lastName"/>
        {errors.lastName && <div className="invalid-feedback"> {errors.lastName } </div>}

  </div>


  <div className="form-group">
    <label htmlFor="email">email</label>
    <input type="email"
    className={`form-control ${errors.email ? 'is-invalid' : ''} `}
    value={email}
onChange={(e)=>setEmail(e.target.value)}
     id="email"  
      placeholder="email" />
          {errors.email && <div className="invalid-feedback"> {errors.email } </div>}

    </div>

    <div className="form-group">
    <label htmlFor="password">password</label>
    <input type="password"
    className={`form-control ${errors.password ? 'is-invalid' : ''} `}
    value={password}
onChange={(e)=>setPassword(e.target.value)}
     id="password"  
      placeholder="password" />
          {errors.password && <div className="invalid-feedback"> {errors.password } </div>}

    </div>


    
  
  <button type="submit" 
  className="btn btn-primary"
   onClick={saveOrUpdateUser}>submit</button>
</form>

  </div>
</div>




    
  )
}

export default User