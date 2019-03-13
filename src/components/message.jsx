import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <h3>{props.message.author}</h3>
      <p>{props.message.content}</p>
    </div>
  );
}

export default Message;
