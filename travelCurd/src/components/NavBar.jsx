
const NavBar = () => {

    


  return (
    <header>

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand m-2" href="#travel" >travel</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " >
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
        <a className="nav-link"   href="/home">Home </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/booking">Booking</a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/">Users</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/add-user">add users</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/update-user/:id">update users</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/products">product</a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/signup">Sing Up</a>
      </li>



      
      <li className="nav-item">
        <a className="nav-link " href="/signin">Sign In</a>
      </li>
    </ul>
    
  </div>

  
  
</nav>
</header>



        
  )
}

export default NavBar