

export default function AddPosts() {
    return (
        <div style={{border: '2px solid black'}}>
            <h3>Posts</h3>
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center'}}>
                <span>Compose New Post</span><i class="bi bi-plus-lg plus-icon"></i>
            </div>
        </div>
    )
}