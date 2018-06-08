import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
    static propTypes = {
        isDisabled: PropTypes.func.isRequired
    };
    render() {
        return (
            <div>
                <form className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your message..." />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.props.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMessage;