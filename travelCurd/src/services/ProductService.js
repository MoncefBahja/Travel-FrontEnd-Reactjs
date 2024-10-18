import axios from "axios";
const REST_API_PRODUCT = 'http://localhost:8888/PRODUCT-SERVICE/product' ;
export const listProducts =  () => axios.get(REST_API_PRODUCT)
export const addProduct = (product) => axios.post(REST_API_PRODUCT,product)
export const getProductById = (productId) => axios.get(REST_API_PRODUCT +'/id/'+productId)
export const updateProduct  =(productId,product) =>axios.put(REST_API_PRODUCT +'/'+productId ,product)
export const deleteProduct = (productId) => axios.delete(REST_API_PRODUCT+'/'+productId)
export const serchByName = (productName) => axios.get(REST_API_PRODUCT+'/name/'+productName)