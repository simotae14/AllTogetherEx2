import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

const ChatMessages = (props) => (
    <ul className="message-list">
        {props.messages.map((message, index) => (
            <ChatMessage
                key={index}
                usernameMsg={message.username}
                usernameProp={props.username}
                textMsg={message.text}
            />
        ))}
    </ul>
);

ChatMessages.propTypes = {
    messages: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
};

export default ChatMessages;