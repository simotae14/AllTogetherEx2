import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ChatWindow from './ChatWindow';
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ]
    }
  }
  addMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <div className="container">
        {
          users.map((user) => (
            <ChatWindow
              key={user.username}
              username={user.username}
              messages={this.state.messages}
              isDisabled={this.isDisabled}
              addMessage={this.addMessage}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;
