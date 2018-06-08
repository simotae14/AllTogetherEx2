import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                username: this.props.username,
                text: ''
            }
        }
    }
    static propTypes = {
        isDisabled: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired
    };
    handleChange = (event) => {
        this.setState({
            message: {
                username: this.props.username,
                text: event.target.value
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage(this.state.message);
        this.setState({
            message: {
                username: this.props.username,
                text: ''
            }
        });
    }
    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.message.text}
                        onChange={this.handleChange}
                        placeholder="Enter your message..."
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={!this.state.message.text && !this.props.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMessage;