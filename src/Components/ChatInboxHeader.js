import React from 'react'
import '../Styles/ChatInboxHeader.css'
import { FiArrowLeft, FiSearch, FiPhone, FiMoreVertical} from "react-icons/fi";

function ChatInboxHeader({ inboxToggle, chatHeadData, chatHeadColor, returnMobileSwitch }) {
    const nameParts = chatHeadData.creator.name ? chatHeadData.creator.name.split(' ') : [];
    const firstLetter = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : 'T';
    const secondLetter = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : 'U';
    const inboxThumbNail = firstLetter + secondLetter;

    function onBackClick() {
        returnMobileSwitch()
        inboxToggle(false)
    };

    return (
        <div className='inboxHeader'>
            <div className='headerLeft'>
                <div className='headerLeftBack' onClick={onBackClick}><FiArrowLeft /></div>
                <div style={{ backgroundColor: chatHeadColor }} className='inboxThumbnail'>{inboxThumbNail}</div>
                <div className='userDetails'>
                    <div className='userName'>{chatHeadData.creator.name ? chatHeadData.creator.name : "Telegram User"}</div>
                    <div className='lastSeen'> Last seen recently</div>
                </div>
            </div>
            <div className='headerRight'>
                <div><FiSearch /></div>
                <div><FiPhone /></div>
                <div><FiMoreVertical /></div>
            </div>
        </div>
    )
}

export default ChatInboxHeader