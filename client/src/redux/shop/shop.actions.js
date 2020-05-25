
import axios from 'axios';
import {ShopActionTypes} from './shop.types';

export function addProduct(productData, img) {
	return dispatch =>{
    return axios.post(`clothes-online.herokuapp.com/admin/products/add`, productData)
    return axios.post(`clothes-online.herokuapp.com/admin/products/add`, img)
        
}

}

export function addCategory(categoryData) {
	return dispatch =>{
    return axios.post(`clothes-online.herokuapp.com/admin/categories/create`, categoryData)
        
}

}

export function removeProduct(deletedData) {
    return dispatch =>{
    return axios.post(`clothes-online.herokuapp.com/admin/products/delete/${deletedData}`, deletedData)
        
}

}





export function showCategory1(){
    return(dispatch)=>{
        return  axios.get("clothes-online.herokuapp.com/admin/categories").then((response)=>{
            dispatch(change(response.data));
        })
    }
}

export function change(categories){
    return{
        type:ShopActionTypes.SHOW_CATEGORY,
        payload:categories
    }
}

export function showProducts(){
    return(dispatch)=>{
        return  axios.get("clothes-online.herokuapp.com/admin/products").then((response)=>{
            dispatch(changePro(response.data));
        })
    }
}

export function changePro(products){
    return{
        type:ShopActionTypes.SHOW_PRODUCTS,
        payload:products
    }
}












