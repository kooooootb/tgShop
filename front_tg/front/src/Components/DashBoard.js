import React from "react";
import Cataloge from "./Cataloge/Cataloge";
import Bag from "./Cataloge/Bag";
import Favorite from "./Cataloge/Favorite";

class DashBoard extends React.Component{
    render() {
        return (
            <div className="DashBoard">
                {(() => {
                    switch (this.props.table) {
                        case 'cataloge':
                            return <Cataloge ></Cataloge>;
                        case 'bag':
                            return <Bag ></Bag>
                        case 'favorite':
                            return <Favorite></Favorite>

                    }
                })()}
            </div>
        )
    }
}

export default DashBoard;