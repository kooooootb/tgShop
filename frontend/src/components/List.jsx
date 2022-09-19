function List(props){
    function handleDeletion(){
        props.deletion(props.id)
    }

    return(
        <div className="product">
            <h1> Name: {props.name}, id: {props.id} </h1>
            <p> Description: {props.description} </p>
            <p> Price: {props.price} </p>
            <p> Left in stock: {props.in_stock} </p>
            <button onClick={handleDeletion}>Delete</button>
        </div>
    )
}

export default List;
