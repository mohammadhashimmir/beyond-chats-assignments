import React, { useState } from 'react'
import '../Styles/SideBar.css'
import { IoPeopleCircleOutline, IoMoon, IoPersonCircleOutline, IoMegaphoneOutline, IoBookmarkOutline, IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { MdWbSunny, } from "react-icons/md";

function SideBar({ isOpen, toggleTheme }) {
    const [toggleLight, setToggleLight] = useState(null);
    function onSunClick() {
        setToggleLight(false)
        toggleTheme()
    }
    function onMoonClick() {
        setToggleLight(true)
        toggleTheme()
    }
    return (
        <div className={`sideBar ${isOpen ? 'open' : ''}`}>
            <div className='userProfile'>
                <div className='userProfile2'>
                    <div className='sideBarProfile'>H</div>
                    <div>{toggleLight ? <MdWbSunny onClick={onSunClick} /> : <IoMoon onClick={onMoonClick} />}</div>
                </div>
                <div className='profileName'>Mohammad Hashim</div>
                <div className='profileExtras'>Set Emoji Status</div>
            </div>
            <hr />
            <div className='profileNavigation'>
                <div><IoPeopleCircleOutline />New Group</div>
                <div><IoMegaphoneOutline />New Channel</div>
                <div><IoPersonCircleOutline />Contacts</div>
                <div><IoBookmarkOutline />Saved Messages</div>
                <div><IoCallOutline />Calls</div>
                <div><IoSettingsOutline />Settings</div>
            </div>
        </div>
    )
}

export default SideBar;