import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Wrapper} from "../App/styles";
import {Button, Comment, Input, Row} from "./styles";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            date: new Date().toISOString().substring(0, 10),
            comment: '',
        }
    }

    onChange = (e) => {
        const {value, name} = e.target;

        this.setState({
            [name]: value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onChange(this.state);
        this.setState({
            value: '',
            comment: '',
        })
    }

    render() {
        return (
            <Wrapper>
                <form onSubmit={this.onSubmit}>
                    <Row>
                        <Input
                            name="value"
                            type="number"
                            placeholder="Сума"
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                        <Input type="date"
                               name="date"
                               value={this.state.date}
                               onChange={this.onChange}
                        />
                    </Row>
                    <Row>
                        <Button type={"submit"}>Зберегти</Button>
                        <Comment name="comment"
                                 value={this.state.comment}
                                 onChange={this.onChange}
                        />
                    </Row>
                </form>
            </Wrapper>
        )
    }
}

Form.propTypes = {
    onChange: PropTypes.func,
}

export default Form;
