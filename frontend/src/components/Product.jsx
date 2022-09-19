import { useState, useEffect } from "react"
import axios from "axios"
import List from "./List"

import { CSRFToken, getCookie } from "./Csrftoken";

function Product(){
    const csrftoken = getCookie('csrftoken')

    const [products, setNewProducts] = useState(null)
    const [formProduct, setFormProduct] = useState({
        id: "",
        name: "Super boots",
        description: "nice and comfy shoes",
        price: "100",
        in_stock: "2",
        manufacturer: "man",
    })

    useEffect(() => {
        getProducts()
    }, [])

    function getProducts(){
        axios({
            method: "GET",
            url: "products/",
        }).then((response) => {
            const data = response.data
            setNewProducts(data)
        }).catch((error) => {
            if(error.response){
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }

    function createProduct(event){
        axios({
            method: "POST",
            url: "products/",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            data:{
                id: formProduct.id,
                name: formProduct.name,
                description: formProduct.description,
                price: formProduct.price,
                in_stock: formProduct.in_stock,
                manufacturer: formProduct.manufacturer,
            }
        }).then((response) => {
            getProducts()
        })

        setFormProduct(({
            id: "",
            name: "Super boots",
            description: "nice and comfy shoes",
            price: "100",
            in_stock: "2",
            manufacturer: "man",
        }))

        event.preventDefault()
    }

    function DeleteProduct(id){
        axios({
            method: "DELETE",
            url: `products/${id}/`,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
        }).then((response) => {
            getProducts()
        })
    }

    function handleChanges(event){
        const {value, name} = event.target
        setFormProduct(prevProduct => ({
            ...prevProduct, [name]: value})
        )}

    return(
        <div className=''>
            <form className='create-Product'>
                <CSRFToken />
                <input onChange={handleChanges} text={formProduct.name} name="name" placeholder="Name" value={formProduct.name} defaultValue="Super boots" />
                <textarea onChange={handleChanges} name="description" placeholder="Take a note..." value={formProduct.description} defaultValue="nice and comfy shoes" />
                <input onChange={handleChanges} text={formProduct.price} name="price" placeholder="Your price here" value={formProduct.price} defaultValue="100" />
                <input onChange={handleChanges} text={formProduct.in_stock} name="in_stock" placeholder="How much left in stock" value={formProduct.in_stock} defaultValue="2" />
                <input onChange={handleChanges} text={formProduct.manufacturer} name="manufacturer" placeholder="Manufacturer" value={formProduct.manufacturer} defaultValue="man" />
                <button onClick={createProduct}>Create Product</button>
            </form>

            { products && products.map(product => <List
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                in_stock={product.in_stock}
                manufacturer={product.manufacturer}
                deletion={DeleteProduct}
            />
            )}

        </div>

    );
}

export default Product;