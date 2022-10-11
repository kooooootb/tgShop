import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Cataloge from "./Cataloge/Cataloge"

const buttonArray = [
    {
        text: 'Каталог',
        icon: <AppsIcon />,
        content: <Cataloge/>,
        title: 'cataloge'
    },
    {
        text: 'Корзина',
        icon: <ShoppingBagIcon/>,
        content: '400',
        title: 'bag'
    },
    {
        text: 'Избранное',
        icon: <FavoriteIcon/>,
        content: '400',
        title: 'favorite'
    }
];

class Navigator extends React.Component{
    sendValue = (content) => {
        const { switchFunction } = this.props;
        switchFunction(content);
    }

    render() {
        return (
            <div className="Navigator">
                {buttonArray.map((button) => (
                        <div>

                            <button className="button_navigator" onClick={() => this.sendValue(button.title)}>{button.icon}</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Navigator;