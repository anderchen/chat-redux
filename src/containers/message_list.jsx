import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';

// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {

  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message) => {
          return <Message  key={message.created_at} message={message} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(){
  return {
    messages: [
      {
        "author":"anonymous92",
        "content":"Hello world!",
        "created_at":"2017-09-26T23:03:16.365Z"
      },
      {
        "author":"anonymous77",
        "content":"My name is anonymous77",
        "created_at":"2017-09-26T23:03:21.194Z"
      }
    ]
  }
}

export default connect(mapStateToProps) (MessageList);
