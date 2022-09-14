import { useState, useEffect } from "react"
import axios from "axios"
import List from "./List"

function Product(){
    const [products, setNewProducts] = useState(null)
    const [formProduct, setFormProduct] = useState({
        name: "",
        description: "",
        price: "",
        in_stock: "",
        manufacturer: "",
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
        })}

    function createProduct(event){
        axios({
            method: "POST",
            url: "products/",
            data:{
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
            name: "",
            description: "",
            price: "",
            in_stock: "",
            manufacturer: "",
        }))

        event.preventDefault()
    }

    function DeleteProduct(id){
        axios({
            method: "DELETE",
            url: 'products/${id}/',

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
                <input onChange={handleChanges} text={formProduct.name} name="name" placeholder="Name" value={formProduct.name} />
                <textarea onChange={handleChanges} name="description" placeholder="Take a note..." value={formProduct.description} />
                <input onChange={handleChanges} text={formProduct.price} name="price" placeholder="Your price here" value={formProduct.price} />
                <input onChange={handleChanges} text={formProduct.in_stock} name="in_stock" placeholder="How much left in stock" value={formProduct.in_stock} />
                <input onChange={handleChanges} text={formProduct.manufacturer} name="manufacturer" placeholder="Manufacturer" value={formProduct.manufacturer} />
                <button onClick={createProduct}>Create Post</button>
            </form>

            { products && products.map(product => <List
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                in_stock={product.in_stock}
                manufacturer='man'
                deletion ={DeleteProduct}
            />
            )}

        </div>

    );
}

export default Product;