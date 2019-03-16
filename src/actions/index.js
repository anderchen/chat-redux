// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export default function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export default function createMessage(channel, author, content) {
  
}