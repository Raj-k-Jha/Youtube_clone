import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//es7 snippet///

function Header() {

 const [inputSearch, setInputSearch] = useState('');


    return (
        <div className="header">
<div className="header__left">
<MenuIcon />
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="youtube"/>

</div>        
         
      <div className="header__input">
      <input onChange={e => setInputSearch(e.target.value)}  value={inputSearch} placeholder="Search" type="text"/>
 
      <SearchIcon className="header__inputButton"/>

     
      </div>     

<div className="header__icons">
<VideoCallIcon className="header__icon"/>
<AppsIcon className="header__icon"/>
<NotificationsIcon className="header__icon"/>
<AccountCircleIcon />
</div>

        </div>
    )
}

export default Header
