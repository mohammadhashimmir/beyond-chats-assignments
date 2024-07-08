import React from 'react'
import { FiMenu } from "react-icons/fi";
import '../Styles/ChatListHeader.css'

function ChatListHeader({ hamToggle }) {
  function onMenuClick() {
    hamToggle(true)
  }
  return (
    <div className='chatListHeader'>
      <div onClick={onMenuClick} className='iconHam'><FiMenu /></div>
      <input className="input" id='searchInput' type="text" placeholder="Search" />
    </div>
  )
}

export default ChatListHeader