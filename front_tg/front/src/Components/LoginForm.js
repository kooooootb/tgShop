import React from "react";

const url = "https://tgshop.hopto.org/admin/"

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.loginRef = null;
        this.passwordRef = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // this.tryLogin();
        event.preventDefault();
    }

    state = {
        failedLogin: false
    }

    tryLogin = async () => {
        debugger;
        const {onButtonClick} = this.props;
        let username = this.loginRef.value;
        let password = this.passwordRef.value;
        try {
            const result = await fetch(url, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'username': username,
                    'password': password
                })
            })

            onButtonClick();

        } catch (err) {
            this.setState({
                error: "Ощибка получения данных"
            })
        }

    }



    render() {
        let {failedLogin} = this.state;
        return (
            <form key='login' onSubmit={this.handleSubmit} className="LoginForm">
                <div>Вход</div>
                <label>Логин: <input type="text" name="username" size="20" ref={ref => this.loginRef = ref}/></label>
                <label>Пароль: <input type="password" name="password" size="20" ref={ref => this.passwordRef = ref}/></label>

                <input type="submit" value="Войти" />
                {failedLogin?
                    <div className='fail'>Неверный логин или пароль!</div>:
                    <div></div>
                }
            </form>

        )
    }
}

export default LoginForm;