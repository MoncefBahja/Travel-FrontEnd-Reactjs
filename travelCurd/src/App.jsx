import './App.css'
import Footer from './components/Footer'
import ListUser from './components/ListUser'
import NavBar from './components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import User from './components/user'
import Home from './components/Home'
import About from './components/About'
import SignUp from './components/SingUp'
import SignIn from './components/SignIn'
import Booking from './components/Booking'
import ListProduct from './components/ListProduct'
import AddUpdateProduct from './components/AddUpdateProduct'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ListUser/>}></Route>
      <Route path='/user' element={<ListUser/>}></Route>
      <Route path='/add-user' element={<User/>}></Route>
      <Route path='/update-user/:id' element={<User/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/booking' element={<Booking/>}></Route>
      <Route path='/products' element={<ListProduct/>}></Route>
      <Route path='/add-product' element={<AddUpdateProduct/>}></Route>
      <Route path='/add-product/:id' element={<AddUpdateProduct/>}></Route>



    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
