import React from "react";
import {Table} from "antd";



const url_manufacturer = 'http://dimakpa.pythonanywhere.com/api/infoWritings/'

class Manufacturer extends React.Component{

    state = {
        records: [],
        error: "",
        show: false,
        edit_id: undefined,
    }

    componentDidMount = async () => {
        this.SetManufacturer();
    }

    DoUpdateAfterModal = async () => {
        this.componentDidMount();
    }

    GoToManufacturer = async (id) => {
        this.setState({ edit_id: id });
    }

    SetManufacturer = async () => {
        const { token } = this.props;
        let manufacturer = []
        try {
            const result = await fetch(url_manufacturer, {
                method: "GET",
                headers: {
                    'Authorization': 'Token ' + token
                }
            })
            manufacturer = await result.json();
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных"
            })
        }
        this.setState({
            records: manufacturer,
        })
    }

    columns = [
        {
            field: 'name',
            dataIndex: 'name'
        },
    ]

    render() {
        const { error, manufacturer } = this.state;

        return (<div className='manufacturer'>
                Бренд
                <h2>{error}</h2>
                <Table dataSource={manufacturer} columns={this.columns}/>
            </div>
        )
    }
}
export default Manufacturer;