import React, { useState } from 'react'
import '../Styles/ChatList.css'
import ChatListHeader from './ChatListHeader'
import Chats from './Chats'


function ChatList({ chats, inboxToggle, getChatHead, getChatBody, hamToggle, mobileCwitch }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div className={hovering ? 'chatListDiv' : 'chatListDivHidden'}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(!hovering)}
    >
      <ChatListHeader hamToggle={hamToggle} />
      <div className="chatListContent">
        <Chats
          chats={chats}
          inboxToggle={inboxToggle}
          getChatHead={getChatHead}
          getChatBody={getChatBody}
          mobileCwitch={mobileCwitch}
        />
      </div>
    </div>
  )
}
export default ChatList;