import './css/style.css';
import { useState } from 'react';
import { checkLogin, getPosts} from './data';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import Error from './Error';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [posts, setPosts] = useState([]);
    const [isPostDataValid, setIsPostDataValid] = useState(false);
    const [viewProfilePage, setViewProfilePage]  = useState(false);
    const [following, setFollowing]  = useState([]);
    const [whoToFollow, setWhoToFollow]  = useState([]);
    const [isErrorPage, setIsErrorPage]  = useState(false);
    checkLogin(setIsLoggedIn, setUserName);

    if (isErrorPage) {
        return (
            <Error setIsErrorPage={setIsErrorPage}></Error>
        )
    }
    if (isLoggedIn) {
        if (viewProfilePage) {
            return (
                <Profile username={userName} 
                setIsLoggedIn={setIsLoggedIn} 
                posts={posts} 
                following={following}
                setPosts={setPosts}
                setFollowing={setFollowing}
                whoToFollow={whoToFollow}
                setWhoToFollow={setWhoToFollow}
                setViewProfilePage={setViewProfilePage}></Profile>
            )
        } else {
            if (!isPostDataValid) {
                getPosts(setPosts, setIsLoggedIn, setIsPostDataValid, setFollowing);
            }
            return (
                <Home userName={userName} 
                    setIsLoggedIn={setIsLoggedIn} 
                    posts={posts} 
                    setPosts={setPosts}
                    whoToFollow={whoToFollow}
                    setWhoToFollow={setWhoToFollow}
                    setFollowing={setFollowing}
                    setViewProfilePage={setViewProfilePage}>
                </Home>
            );
        }
    } else {
        return (
            <Login setUserName={setUserName} 
                   setIsLoggedIn={setIsLoggedIn} 
                   setPosts={setPosts}
                   setWhoToFollow={setWhoToFollow}
                   setFollowing={setFollowing}
                   setIsErrorPage={setIsErrorPage}
            ></Login>
        );
    }
}

export default App;
