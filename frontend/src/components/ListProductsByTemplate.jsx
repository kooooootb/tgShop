import { useState, useEffect } from "react"
import List from "./List";
import axios from "axios";
import {getCookie} from "./Csrftoken";

function ListProductsByTemplate(){
    const [products, setProducts] = useState(null)
    let currentProducts

    const csrftoken = getCookie('csrftoken')

    function getProducts(){
        const currentProductsDoc = document.getElementById('products_list').textContent
        currentProducts = JSON.parse(currentProductsDoc)
    }
    getProducts()

    useEffect(() => {
        setProducts(currentProducts)
    }, [])

    function removeById(id){
        const currentProducts = products
        const index = currentProducts.findIndex((product) => {
            return product.id === id
        })
        currentProducts.splice(index, 1)
        setProducts(currentProducts)
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
            removeById(id)
        })
    }

    return(
        <div>
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
    )
}

export default ListProductsByTemplate;
