

export default function AddPosts() {
    return (
        <div style={{border: '2px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Posts</h3>
            <div className="textarea-post" contentEditable='true' placeholder="What's happening?"></div>
            <div className="post-options">
                <div style={{margin: '15px 0 0 30px', display: 'flex', gap: '2rem'}}>
                    <i className="bi bi-image-fill pointer"></i>
                    <i className="bi bi-emoji-smile-fill pointer"></i>
                </div>
                <div>
                    <button className="post-button"><i className="bi bi-plus-lg plus-icon"></i> POST</button>
                </div>
            </div>
        </div>
    )
}

// hello