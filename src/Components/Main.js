import React from 'react'
import '../Styles/Main.css'
import ChatInbox from './ChatInbox'

function Main({ showInbox, inboxToggle, chatHeadData, chatBodyData, chatHeadColor, returnMobileSwitch }) {
  return (
    <div className="mainDiv">
      {showInbox ?
        <ChatInbox
        inboxToggle={inboxToggle}
        chatHeadData={chatHeadData}
        chatHeadColor={chatHeadColor}
        chatBodyData={chatBodyData}
        returnMobileSwitch={returnMobileSwitch}
        />
        : <div className='mainMessage'>Select a chat to start messaging</div>}
    </div>
  )
}
export default Main