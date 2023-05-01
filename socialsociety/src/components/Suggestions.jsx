
export default function Suggestion(props) {
    return (
        <div className="settings-options" style={{gap: '1rem'}}>
            <div>{props.username}</div>
            <i class="bi bi-plus-square"></i>
        </div>
    )
}