import { useState ,useEffect} from "react"
import { addProduct, getProductById, updateProduct } from "../services/ProductService"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
const AddUpdateProduct = () => {

 const [name,setName] = useState ('')
    const [type,setType] = useState ('')
    const [price,setPrice] = useState ('')
    const [description,setDescription] = useState('')
    const [availableUnits,setAvailableUnits] = useState('')

    const navigator = useNavigate()
    const {id} =useParams ()


    

    useEffect (()=> {
        if(id) {
            getProductById(id).then((response)=>{
                setName(response.data.name)
                setPrice(response.data.price)
                setDescription(response.data.description)
                setAvailableUnits(response.data.availableUnits)
                setType(response.data.type)
            }).catch( error => {
                console.error(error)
            })
        }

    },[id])
     


    function sendData(e) {
   e.preventDefault() ;
   const product = {name,type,price,description,availableUnits}

   if(id) {
    updateProduct(id,product).then(response => {
        console.log(response.data)
        navigator("/products")

    } ).catch(error=>{
        console.error(error)
    })

   }else {
    addProduct(product).then(response => {
        console.log(response.data)
        navigator("/products") 

    } ).catch(error=>{
        console.error(error)
    })


   }


    }

    function title () {
        if(id)   {
             return <h2 className="text-center"> update  User</h2>
        }    
        else {
             return <h2 className="text-center"> add  User</h2>

        }

    }


  return (
    <div>
        {title()}
        <form>
  <div className="form-group row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" 
      className="form-control" 
      id="name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
       placeholder="name"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
    <div className="col-sm-10">
      <input type="text" 
      className="form-control"
       id="price"
       value={price}
       onChange={(e)=>setPrice(e.target.value)}
        placeholder="Price"/>
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <input type="text" 
      className="form-control"
       id="description"
       value={description}
       onChange={(e)=> setDescription(e.target.value)}
       placeholder="description"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="availableUnits" className="col-sm-2 col-form-label">AvailableUnits</label>
    <div className="col-sm-10">
      <input type="text" 
      className="form-control"
       id="availableUnits" 
       value={availableUnits}
       onChange={(e) => setAvailableUnits(e.target.value)}
       placeholder="availableUnits"/>|
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Type</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input 
          className="form-check-input" 
          type="radio" 
          name="type"
           id="HOTEL" 
           value="HOTEL" 
           checked={type==="HOTEL"}
           onChange={(e)=>setType(e.target.value)}
            />
          <label className="form-check-label" htmlFor="HOTEL">
          HOTEL          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio"
           name="type" 
           id="CAR_RENTAL" 
           value="CAR_RENTAL"
           checked={type==="CAR_RENTAL"}
           onChange={(e)=>setType(e.target.value)}
           />
          <label className="form-check-label" htmlFor="CAR_RENTAL">
          CAR_RENTAL          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio"
           name="type"
            id="FLIGHT" 
           value="FLIGHT"
           checked={type==="FLIGHT"}
           onChange={(e)=>setType(e.target.value)}
           />
          <label className="form-check-label" htmlFor="FLIGHT">
           FLIGHT          </label>
        </div>
      </div>
    </div>
  </fieldset>
   
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" 
      className="btn btn-primary"
      onClick={sendData}
      >Submit</button>
    </div>
  </div>
</form>
      
    </div>
  )
}

export default AddUpdateProduct
