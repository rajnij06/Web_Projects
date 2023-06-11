import './css/style.css';
import twitterLogo from './image/logo.PNG';
import bookmarksLogo from './image/bookmarks.png';
import exploreLogo from './image/explore.png';
import homeLogo from './image/home.png';
import listsLogo from './image/lists.png';
import messagesLogo from './image/messages.png';
import moreLogo from './image/more.png';
import notificationsLogo from './image/notifications.png';
import defaultPhotoLogo from './image/default-photo.png';
import prolileLogo from './image/profile.png';
import { performLogout } from './data';


function NavBarLeft(props) {
    return (
        <nav className="left-menu">
            <nav className="logo">
                <img src={twitterLogo} alt="plants" />									
            </nav>
            <nav className="options" >
                <ul>
                <button className={props.active === "home" ? "home active" : "home"} onClick={ () => props.setViewProfilePage(false)} >
                        <img src={homeLogo} alt="home icon" />
                        <span>Home</span>
                    </button>
                </ul>    
                <ul>
                    <button className={props.active === "profile" ? "profile active" : "profile"} onClick={ () => props.setViewProfilePage(true)}>
                        <img src={prolileLogo} alt="profile icon" />
                        <span>Profile</span>
                    </button> 
                </ul>                
                <ul>
                    <button className="notifications">
                        <img src={notificationsLogo} alt="notifications icon" />
                        <span>Notifications</span>
                    </button>   
                </ul>
                <ul>
                    <button className="messages">
                        <img src={messagesLogo} alt="messages icon" />
                        <span>Messages</span>
                    </button> 
                </ul>
                <ul>
                    <button className="bookmarks">
                        <img src={bookmarksLogo} alt="bookmarks icon" />
                        <span>Bookmarks</span>
                    </button> 
                </ul>
                <ul>
                    <button className="lists">
                        <img src={listsLogo} alt="lists icon" />
                        <span>Lists</span>
                    </button> 
                </ul>                    
                <ul>
                    <button className="Explore">
                        <img src={exploreLogo} alt="explore icon" />
                        <span>explore</span>
                    </button>
                </ul>
                <ul>
                    <button className="logout"  onClick={ () => performLogout(props)}>
                        <img src={moreLogo} alt="more icon" />
                        <span>Logout</span>
                    </button> 
                </ul>
                <ul>
                    <button className="tweet" type="button">Tweet</button>
                </ul>
            </nav>
            <nav className="user">
                <img className="user-photo" src={defaultPhotoLogo} alt="more icon" />
                <nav className="user-name">
                    <span>{props.username}</span>                
                </nav>    
                <nav className="user-handler">
                    <span>@{props.username}</span>
                </nav>        
            </nav>
        </nav>
    );
}

export default NavBarLeft;
