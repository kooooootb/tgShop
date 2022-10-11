import React from "react";

const url = "https://tgshop.hopto.org/admin/shop/product/"

class Cataloge extends React.Component{
    componentDidMount() {
        const result = fetch(url);
        console.log(result);
    }

    render() {
        return (
            <div className="Cataloge">
                <h1>CATALOGUE</h1>
            </div>
        )
    }
}

export default Cataloge;