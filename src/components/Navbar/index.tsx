import * as React from 'react'
import LogoImage from '../../assets/images/logo.png'
import NotificationIcon from '../../assets/images/notification.svg'
import SettingsIcon from '../../assets/images/settings.svg'
import ProfileImg from '../../assets/images/profile-img.svg'
import SearchIcon from '../../assets/images/search-icon.svg'

import './navbar.scss'

const Navbar = () => {
  return (
    <div className='nav'>   
     <div className="nav-wrapper">
        <div className="nav-logo">
            <img src={LogoImage} alt="logo"/>
        </div>

        <div className="nav-search">
            <form>
                <span className='search-icon'><img src={SearchIcon} alt="search"/></span>
                <input className='search-input' type="text" placeholder='Search'/>
            </form>

        </div>

        <div className="nav-profile">
            <img src={NotificationIcon} alt="notification"/>

            <img src={SettingsIcon} alt="settings"/>
            <div className="profile">

            <img src={ProfileImg} alt="profile"/>
            <div className="profile-info">
                <h4>Alice Ferguson</h4>
                <p>Project Owner</p>
            </div>
            </div>




        </div>

    </div>
    </div>

  )
}

export default Navbar