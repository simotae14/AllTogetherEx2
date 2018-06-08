import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ChatHeader = (props) => (
    <Fragment>
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{props.username}</div>
    </Fragment>
);

ChatHeader.propTypes = {
    username: PropTypes.string.isRequired
};

export default ChatHeader;