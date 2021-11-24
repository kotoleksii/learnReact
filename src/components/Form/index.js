import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        const {value} = e.target;

        this.setState({
            value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onChange(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="balance"
                    type="number"
                    placeholder="Сума"
                    value={this.state.value}
                    onChange={this.onChange}/>

                <button type={"submit"}>Зберегти</button>
            </form>
        )
    }
}

export default Form;
