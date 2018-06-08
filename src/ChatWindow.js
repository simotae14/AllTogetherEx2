import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import AddMessage from './AddMessage';

class ChatWindow extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
        isDisabled: PropTypes.func.isRequired,
        addMessage: PropTypes.func.isRequired
    };
    render() {
        return (
        <div className="chat-window">
            <ChatHeader username={this.props.username} />
            <ChatMessages
                messages={this.props.messages}
                username={this.props.username}
            />
            <AddMessage
                isDisabled={this.props.isDisabled}
                username={this.props.username}
                addMessage={this.props.addMessage}
            />
        </div>
        );
    }
}

export default ChatWindow;