function List(props){
    function handleClick(){
        props.deletion(props.id)
    }

    return(
        <div className="product">
            <h1> Name: {props.name} </h1>
            <p> Description: {props.description} </p>
            <p> Price: {props.price} </p>
            <p> Left in stock: {props.in_stock} </p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default List;
