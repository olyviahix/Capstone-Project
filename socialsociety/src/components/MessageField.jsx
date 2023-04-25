

export default function MessageField() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '100%', height: '100%', overflowY: 'auto'}}>

            </div>
            <div className="message-container" style={{display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center'}}>
                <div className="message-post" id='textarea-char' contentEditable='true' ></div>
                <button class="message-btn" style={{width: '7rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem'}}>
                    <i class="bi bi-send-fill"></i>
                </button>
            </div>
        </div>
    )
}