import React, { useState } from 'react'
import '../Styles/ChatInboxFooter.css'
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile, BsMic } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
function ChatInboxFooter() {
  const [showSend, setShowSend] = useState(false);
  const [inboxInput, setInboxInput] = useState("")
  function onInboxInp(e) {
    const value = e.target.value;
    setInboxInput(value);
    if (value.trim() !== "") {
      setShowSend(true)
    } else {
      setShowSend(false)
    }
  }
  return (
    <div className='inboxFooter'>
      <div className='inboxAttach'><FiPaperclip /></div>
      <div className='inboxType'>
        <input
          onChange={onInboxInp}
          className="input"
          id="inp1"
          value={inboxInput}
          type="text"
          placeholder="Write a message..."
          autoFocus
        />
      </div>
      <div className='inboxIcons'>
        <div><BsEmojiSmile /></div>
        {showSend ? <div className='sendIcon'><RiSendPlane2Fill /></div> : <div><BsMic /></div>}


      </div>
    </div>
  )
}

export default ChatInboxFooter;