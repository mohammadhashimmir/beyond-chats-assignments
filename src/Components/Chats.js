import React from 'react';
import ChatCards from './ChatCards';

function Chats({ chats,inboxToggle, getChatHead,getChatBody, mobileCwitch}) {
  const colorsArray = [
    '#64B5F6',
    '#FFB74D',
    '#4DB6AC',
    '#9575CD',
    '#FF8A65',
    '#4CAF50',
    '#F06292',
    '#AED581',
    '#81D4FA',
    '#FFD54F'];
  return (
    <div>
      {chats.map((val, index) => (
        <ChatCards
        key={index}
        values={val}
        color={colorsArray[index % colorsArray.length]}
        inboxToggle={inboxToggle}
        getChatHead={getChatHead}
        getChatBody={getChatBody}
        mobileCwitch={mobileCwitch}
        />
      ))}
    </div>
  );
}

export default Chats