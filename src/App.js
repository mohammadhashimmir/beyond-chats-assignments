import { useEffect, useState } from "react";
import axios from "axios";
import ChatList from "./Components/ChatList";
import Main from "./Components/Main";
import SideBar from "./Components/SideBar";
import './Styles/App.css'

function App() {
  const [chats, setChats] = useState([]);
  const [showInbox, setShowInbox] = useState(false);
  const [selectedChatHeads, setSelectedChatHeads] = useState(null);
  const [selectedChatHeadsColors, setSelectedChatHeadColors] = useState(null);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showMain, setShowMain] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState('dark');

  // chat heads retrieval 
  useEffect(() => {
    async function retriever() {
      try {
        const page1Response = await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=1");
        const page1Chats = page1Response.data.data.data;

        const page2Response = await axios.get("https://devapi.beyondchats.com/api/get_all_chats?page=2");
        const page2Chats = page2Response.data.data.data;

        const combinedChats = [...page1Chats, ...page2Chats];
        setChats(combinedChats);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    }
    retriever();
  }, []);

  // Mobile Resize 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setShowMain(false);
      setShowList(true)
    } else {
      setShowMain(true);
      setShowList(true)
    }
  }, [windowWidth]);
  function mobileSwitch() {
    setShowMain(true);
    setShowList(true)
  }
  function returnMobileSwitch() {
    setShowMain(false);
    setShowList(true)
  }

  // theme toggler 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // display chatInbox 
  function inboxToggler(val) {
    setShowInbox(val);
  };

  // retrieve chat head data and colors 
  function retrieveSelectedChat(chatHead, color) {
    setSelectedChatHeads(chatHead);
    setSelectedChatHeadColors(color);
  };

  // retrieve chat bodies 
  function retrieveSelectedMessages(chatBody) {
    console.log(chatBody)
    setSelectedMessages(chatBody)
  };

  // menu toggle 
  function hamToggle(val) {
    setShowMenu(val)
  };

  return (
    <div className="appDiv">
      <SideBar isOpen={showMenu} toggleTheme={toggleTheme} />
      {showMenu && <div className={`overlay ${showMenu ? 'visible' : ''}`} onClick={() => setShowMenu(false)} />}

      {showList ?
        <ChatList
          chats={chats}
          inboxToggle={inboxToggler}
          getChatHead={retrieveSelectedChat}
          getChatBody={retrieveSelectedMessages}
          hamToggle={hamToggle}
          mobileCwitch={mobileSwitch}
        /> : null}

      {showMain ?
        <Main
          showInbox={showInbox}
          inboxToggle={inboxToggler}
          chatHeadData={selectedChatHeads}
          chatHeadColor={selectedChatHeadsColors}
          chatBodyData={selectedMessages}
          hamToggle={hamToggle}
          returnMobileSwitch={returnMobileSwitch}
        /> : null}
    </div>
  );
}

export default App;
