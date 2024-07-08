import '../Styles/ChatCards.css'
import axios from 'axios';
function ChatCards({ values, color, inboxToggle, getChatHead, getChatBody, mobileCwitch }) {

  // contact thumbnails 
  const nameParts = values.creator.name ? values.creator.name.split(' ') : [];
  const firstLetter = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : 'T';
  const secondLetter = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : 'U';
  const thumbNail = firstLetter + secondLetter;

  // date/time 
  const createdAt = new Date(values.created_at);
  const time = createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  //  send over chat body 
  async function onDivClick() {
    try {
      inboxToggle(true);
      getChatHead(values, color);
      const res = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${values.id}`);
      getChatBody(res.data.data);
      mobileCwitch(true, false);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
    }
  }
  return (
    <div onClick={onDivClick} className='chatCardBox'>
      <div className='chatIconBox'>
        <div className='chatThumbnail' style={{ backgroundColor: color }}>{thumbNail}</div>
      </div>
      <div className='chatContent'>
        <p>
          <strong className='sender'>{values.creator.name ? values.creator.name : "Telegram User"}</strong>
          <br />
          <span className='mssg'>New Messages</span>
        </p>
      </div>
      <div className='chatExtras'>
        <div className='chatTime'><p>{time}</p></div>
        <div className='chatUnreadCount'><p className='mssgCount'>{values.msg_count}</p></div>
      </div>
    </div>
  )
}

export default ChatCards