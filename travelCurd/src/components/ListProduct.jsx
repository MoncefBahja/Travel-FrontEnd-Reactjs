import { useState ,useEffect} from "react"
import { deleteProduct, listProducts } from "../services/ProductService"
import { useNavigate } from "react-router-dom"
import { serchByName } from "../services/ProductService"
//import { useParams } from "react-router-dom"
const ListProduct = () => { 
 const [products,setProducts] = useState([])
 //const {name} =  useParams()

 const [name,setName] = useState()
 const navigator = useNavigate ()
   
 useEffect (()=>{
    getAllProducts()
 }
 ,[])
 function getAllProducts () {
    listProducts().then((response) => setProducts(response.data) ).catch((error) => {
        console.error(error);
      });
 }

 function changeToadd () {
  navigator("/add-product")
 }
 function changeToUpdate (id) {
  navigator (`/add-product/${id}`)

 }

 function handleDelete (id) {
  deleteProduct(id).then((response)=> {
    getAllProducts()
  }
  ).catch(error=> console.error(error))

 }
 function serchProductName (name) {
  serchByName(name).then((response)=>
    setProducts(response.data) // Mets à jour l'état des produits avec les résultats de la recherche

  ).catch(error=>console.error(error))
 }


 const handleSubmit = (e) => {
  e.preventDefault(); 
  
  
  serchProductName(name); // Appelle la fonction pour rechercher le produit
};

  return (
    <div>

<div className="container">
<form className="form-inline d-flex justify-content-end" onSubmit={handleSubmit}>
    <input className="form-control mr-2 w-4" type="search"
     placeholder="Search"
      aria-label="Search"
     style={{ width: "300px" }} 
     value={name}
onChange={(e)=>setName(e.target.value)}

     />
    <button 
    className="btn btn-outline-success"
     
     type="submit">Search</button>
  </form>
  </div>

      <button type="button" className="btn btn-primary" onClick={changeToadd}> add Product</button>

      <table className="table table-striped">
  <thead>
    <tr >
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">type</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
      <th scope="col">availableUnits</th>
      <th scope="col">Actions</th>

      
    </tr>
  </thead>
  <tbody>


  { 
    products.map(product => 
        <tr key={product.id}>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>{product.availableUnits}</td>
      <td>
      <button type="button"
       className="btn btn-secondary"
       onClick={()=>changeToUpdate(product.id)}
       >Update</button>
      </td>
      <td>

      <button type="button"
      className="btn btn-danger"
      onClick={()=>handleDelete(product.id)}
      >delete</button>

      </td>
     
    </tr>
    )
  }



    
    
  </tbody>
</table>
    </div>
  )
}

export default ListProduct
