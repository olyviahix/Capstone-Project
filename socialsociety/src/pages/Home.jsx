import AddPosts from "../components/AddPosts";
import SideBar from "../components/Sidebar";
import '/Users/amirhali/repos/Capstone-Project/socialsociety/src/App.css';


export default function Home() {
    return (
        <div class='main'>
            <SideBar/>
            <div id="mobile-content" className='content' >
                <div id='mobile-fixed' className='fixed-container'>
                    <AddPosts/>
                </div>
                <div className='post-section'>
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
                <div className='fixed-container-right'>
                    <h1>Suggestions</h1>
                </div>
                <div className='post-section-right'>
                    <div><p>Post</p></div>
                </div>
            </div>
        </div>
    )
}