import './css/style.css';
import { submitPost, followUser, reTweet } from './data';
import NavBarLeft from './NavBarLeft';
import { useState } from 'react';
import defaultPhotoLogo from './image/default-photo.png';
import likeLogo from './image/like.png';


function Home(props) {
    const [newPost, setNewPost] = useState('');
    return (
        <div className="home-content">				
            <NavBarLeft active={"home"} 
                        setViewProfilePage={props.setViewProfilePage}
                        username={props.userName}
                        setIsLoggedIn={props.setIsLoggedIn} >
            </NavBarLeft>
            <nav className="home-main">            
                <nav className="tweet-text-box">
                    <span>Home</span> 
                    <nav className="input-area">                    
                        <img className="input-user-photo" src={defaultPhotoLogo} alt="more icon" onClick={ () => props.setViewProfilePage(true)}/>
                        <input className="typing" type="text" placeholder="What's happening?" value={newPost} onInput={(e) => setNewPost(e.target.value)} />                
                        <button className="tweet-post" type="button" onClick={ () => {
                            if (newPost) {
                                submitPost(props.userName, newPost, props);
                                setNewPost('');
                            }
                        }} disabled={newPost.length ? false : true} >Tweet</button>
                    </nav>
                </nav>
                <nav className="posts">
                {props.posts.slice(0).reverse().map((postData) => (  
                    <li>
                        <img className="post-user-photo" src={defaultPhotoLogo} alt="more icon" />
                        <span>{postData.name}</span>
                        <nav>{postData.post}</nav>
                        <span className="like-option">
                            {props.userName !== postData.name &&
                                <button className="retweet" type="button" onClick={ () => reTweet(props.userName, postData.post, props)}>Retweet</button>
                            }
                            <img className="like-icon" src={likeLogo} alt="more icon" />
                            <span>{postData.love}</span>
                        </span>
                    </li>
                ))} 
                </nav>
            </nav>
            <nav className="right-menu">			
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
            </nav>
        </div>
    );
}

export default Home;
