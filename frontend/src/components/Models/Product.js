import React from "react";
import { Table } from 'antd';
import Product from "./Product";
import CheckRecords from "./CheckRecords";


const url_author = 'https://dimakpa.pythonanywhere.com/api/infoAutors/'
const url_records = 'http://dimakpa.pythonanywhere.com/api/infoWritings/'

class Product extends React.Component{

    state = {
        product: [],
        error: "",
        show: false,
        edit_id: undefined,
        recordsView: undefined,
    }

    componentDidMount = async () => {
        const { token } = this.props;
        let product = []
        try {
            const result = await fetch(url_author, {
                method: "GET",
                headers: {
                    'Authorization': 'Token ' + token
                }
            })
            product = await result.json();
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных"
            })
        }

        this.setState({
            product: product,
        })
    }


    columns = [
        {
            field: 'name',
            dataIndex: 'name',
        },
        {
            field: 'description',
            dataIndex: 'description',

        },
        {
            field: 'in_stock',
            dataIndex: 'in_stock?'
        },
        {
            field: 'price',
            dataIndex: 'price'
        },
        {
            field: 'image',
            dataIndex: 'image'
        },

    ]

    render() {
        const { error, authors} = this.state;
        const { activeWindow } = this.props;
        return (
            <>
                <div className="product">Авторы
                    <h2>{error}</h2>
                    <Table
                        dataSource={authors}
                        columns={this.columns}
                        onRow={(recordsView, rowIndex) => {
                            return {
                                onClick: (event) => {
                                    this.activeWindow = 'checkProduct';
                                },
                            };
                        }}/>
                        }

                </div>
            </>
        );
    }
}
export default Product;