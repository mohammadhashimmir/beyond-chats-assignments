import React, { useEffect, useRef, useState } from 'react'
import ChatInboxHeader from './ChatInboxHeader'
import ChatInboxFooter from './ChatInboxFooter'
import '../Styles/ChatInbox.css'
function ChatInbox({ inboxToggle, chatHeadData, chatBodyData, chatHeadColor, returnMobileSwitch }) {
  const [chatHovering, setChatHovering] = useState(false);

  // end of chat scroll
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;}
  }, [chatBodyData]);
  const renderer = chatBodyData.map((vals, index) => {

    // chat time 
    const createdAt = new Date(vals.created_at);
    const time = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // chat logo
    const nameParts = vals.sender.name ? vals.sender.name.split(' ') : [];
    const firstLetter = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : 'T';
    const secondLetter = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : 'U';
    const thumbNail = firstLetter + secondLetter;

    return (
      <div className='eachMessage' key={index}>
        <div style={{ backgroundColor: chatHeadColor }} className='eachThumbnail'>{thumbNail}</div>
        <div className='eachMain'>
          <div style={{ color: chatHeadColor }} className='eachUser'>{vals.sender.name ? vals.sender.name : "Telegram User"}</div>
          <div className='userText'>{vals.message}</div>
          <div className='eachTime'>{time}</div>
        </div>
      </div>
    );
  })

  return (
    <div className='masterDiv' ref={scrollRef} onMouseEnter={() => setChatHovering(true)}
      onMouseLeave={() => setChatHovering(!chatHovering)} >
      <ChatInboxHeader
      inboxToggle={inboxToggle}
      chatHeadData={chatHeadData}
      chatHeadColor={chatHeadColor}
      returnMobileSwitch={returnMobileSwitch}
      />
      <div className='hoverDate'><div className={chatHovering ? 'dateWrapper' : 'dateWrapperHidden'}>july 4</div></div>
      <div className='inboxMain'>{renderer}</div>
      <ChatInboxFooter />
    </div>
  )
}

export default ChatInbox

