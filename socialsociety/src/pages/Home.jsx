import AddPosts from "../components/AddPosts";
import SideBar from "../components/Sidebar";
import PostContent from "../components/PostContent";
import '../App.css';
import LogOutModal from "../components/LogOutModal";


export default function Home() {
    return (
        <div class='main'>
            <SideBar/>
            <LogOutModal/>
            <div id="mobile-content" className='content' >
                <div id='mobile-fixed' className='fixed-container'>
                    <AddPosts/>
                </div>
                <div className='post-section'>
                    <PostContent/>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
                    <div><p>Post</p></div>
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