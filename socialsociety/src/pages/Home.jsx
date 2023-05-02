import AddPosts from "../components/AddPosts";
import SideBar from "../components/Sidebar";
import PostContent from "../components/PostContent";
import '../App.css';
import LogOutModal from "../components/LogOutModal";
import InterestsModal from '../components/InterestsModal'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allUsers, getAllUsers, setCurrentUser } from "../features/loggedUserSlice";
import { getPosts, showAll, grabAllPosts } from "../features/postSlice";
import Suggestion from "../components/Suggestions";
import axios from "axios";


export default function Home() {
    const url = 'http://localhost:7000';
    const dispatch = useDispatch();
    const posts = useSelector(getPosts);
    const allPosts = useSelector(showAll);
    const users = useSelector(allUsers)
    const [allUser, setAllUser] = useState(users)
   
    const onInputChange = (e) => {
        setAllUser(users.filter((item)=> item.username.includes(e.target.value)))
        console.log(users)
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get(url+'/all-users')
            if(response.data !== null){
                dispatch(getAllUsers(response.data))
                setAllUser(users)
            }
        } catch (err) {
            console.log(err)
          }
    }
    const fetchPost = async () => {
        try {
            const response = await axios.get(url+'/all-posts')
            if(response.data !== null){
                dispatch(grabAllPosts(response.data))
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=> {
        const foundUser = localStorage.getItem('user');
        const user = JSON.parse(foundUser)
        if(foundUser != null){
            dispatch(setCurrentUser(user));
            fetchUsers();
            fetchPost();
           
        }
    }, []);

    return (
        <div className="main">
            <SideBar/>
            <LogOutModal/>
            <InterestsModal/>
            <div id="mobile-content" className='content' >
                <div id='mobile-fixed' className='fixed-container'>
                    <AddPosts/>
                </div>
                <div className='post-section'>
                    {
                        allPosts.slice().reverse().map((item, index) => (
                            <PostContent username={item.username} content={item.content} key={index} item={item} likes={item.likes} id={index+'li'} time={item.date} uuid={item.uuid}/>
                        ))
                    }
                </div>
            </div>
            <div className='right-content' id='right-section'>
                <div className='post-section-right' style={{background: '#b3'}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputChange}/>
                    {
                        allUser.map((item, index) => (
                            <Suggestion username={item.username}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}