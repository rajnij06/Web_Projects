import './css/style.css';
import NavBarLeft from './NavBarLeft';
import backLogo from './image/back.png';
import calendarLogo from './image/calendar.png';
import defaultPhotoLogo from './image/default-photo.png';
import { unFollowUser , followUser } from './data';


function Profile(props) {
    console.log(props);
    return (
        <div className="profile-content">
            <NavBarLeft active={"profile"}  
                        setViewProfilePage={props.setViewProfilePage}
                        username={props.username} 
                        setIsLoggedIn={props.setIsLoggedIn} ></NavBarLeft>				
            <nav className="profile-main">  
                <nav className="header">
                    <button className="back-button" onClick={ () => props.setViewProfilePage(false)}>
                        <img src={backLogo} alt="home icon" />                    
                    </button>
                    <span>{props.username}</span>
                </nav>  
                <nav className="wall">
                    <img className="user-big-photo" src={defaultPhotoLogo} alt="more icon" />
                    <div></div>
                </nav>
                <nav className="info-area">
                    <span>{props.username}</span>
                    <li>@{props.username}</li>
                    <li> 
                        <img className="calendar" src={calendarLogo} alt="more icon" />
                        Joined December 2022
                    </li>
                    <li>{props.following.length} Following</li>
                </nav>     
                <nav className="more-accounts">
                    <span>Following</span>
                    {props.following.map((user) => (  
                        <ul>
                            <img className="sugg-photo" src={defaultPhotoLogo} alt="more icon" />
                            <nav className="sugg-details">
                                <span>{user}</span>
                                <p>@{user}</p>
                            </nav>
                            <button className="follow-button" type="button" onClick={ () => unFollowUser(props.username, user, props)}>Unfollow</button>
                        </ul>
                    ))}
                </nav>
            </nav>
            <nav className="right-menu">			
                <nav className="accounts">
                    <span>Who to follow</span>
                    {props.whoToFollow.map((user) => (  
                        <ul>
                            <img className="sugg-photo" src={defaultPhotoLogo} alt="more icon" />
                            <nav className="sugg-details">
                                <span>{user}</span>
                                <p>@{user}</p>
                            </nav>
                            <button className="follow-button" type="button" onClick={ () => followUser(props.username, user, props)}>Follow</button>
                        </ul>
                    ))}
                </nav>
                <nav className="live">                
                    <span>What's happning?</span>
                    <ul>
                        <span>FIFA World Cup·LIVE</span>
                        <p>England vs France</p>
                    </ul>
                    <ul>
                        <span>#FortniteChapter4</span>
                        <p>A new beginning awaits</p>
                    </ul>
                    <ul>
                        <span>Entertainment·Trending</span>
                        <p>Lori Harvey</p>
                    </ul>
                </nav>           
            </nav>
        </div>
    );
}

export default Profile;
