import React from "react";
import {Table} from "antd";

const url_tags = 'http://dimakpa.pythonanywhere.com/api/infoTags/'

class Tags extends React.Component{
    state = {
        tags: [],
        error: "",
        show: false,
        edit_id: undefined,
    }

    componentDidMount = async () => {
        this.SetRecords();
    }

    handleClick = () =>{
        const {handleLoginClick} = this.props;
        handleLoginClick(false);
    }

    GoToRecord = async (id) => {
        this.setState({ edit_id: id });
    }

    SetRecords = async () => {
        const { token } = this.props;
        let tags = []
        try {
            const result = await fetch(url_tags, {
                method: "GET",
                headers: {
                    'Authorization': 'Token ' + token
                }
            })
            tags = await result.json();
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных"
            })
        }
        this.setState({
            tags: tags,
        })
    }

    columns = [
        {
            field: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            field: 'text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            field: 'color',
            dataIndex: 'color',
            key: 'color',
        },
    ]

    render() {
        const { error, tags } = this.state;

        return (<div className='records'>
                Записки
                <h2>{error}</h2>
                <Table dataSource={tags} columns={this.columns}/>
            </div>
        )
    }
}
export default Tags