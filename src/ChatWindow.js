import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';

class ChatWindow extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
        isDisabled: PropTypes.func.isRequired
    };
    render() {
        return (
        <div className="chat-window">
            <ChatHeader username={this.props.username} />
            <ChatMessages
                messages={this.props.messages}
                username={this.props.username}
            />
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
        </div>
        );
    }
}

export default ChatWindow;