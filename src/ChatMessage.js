import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = (props) => (
    <li
        className={
            props.usernameMsg === props.usernameProp ? 'message sender' : 'message recipient'
        }
    >
        <p>{`${props.usernameMsg}: ${props.textMsg}`}</p>
    </li>
);

ChatMessage.propTypes = {
    usernameMsg: PropTypes.string.isRequired,
    textMsg: PropTypes.string.isRequired,
    usernameProp: PropTypes.string.isRequired
};

export default ChatMessage;