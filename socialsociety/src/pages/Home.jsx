import AddPosts from "../components/AddPosts";
import SideBar from "../components/Sidebar";
import PostContent from "../components/PostContent";
import '../App.css';
import LogOutModal from "../components/LogOutModal";
import { useSelector } from "react-redux";
import { getPosts } from "../features/postSlice";


export default function Home() {
    const posts = useSelector(getPosts);

    return (
        <div class='main'>
            <SideBar/>
            <LogOutModal/>
            <div id="mobile-content" className='content' >
                <div id='mobile-fixed' className='fixed-container'>
                    <AddPosts/>
                </div>
                <div className='post-section'>
                    {
                        posts.map((item, index)=> (
                            <PostContent username={item.username} content={item.content} key={index}/>
                        ))
                    }
                    
                </div>
            </div>
            <div className='right-content' id='right-section'>
                <div className='post-section-right'>
                    <div><p>Post</p></div>
                </div>
            </div>
        </div>
    )
}