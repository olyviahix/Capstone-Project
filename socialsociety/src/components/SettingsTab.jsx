import { useDispatch } from "react-redux"
import { settingsChosen } from "../features/toggleSlice"

export default function SettingsTab(props) {
    const dispatch = useDispatch();
    return (
        <div className="settings-options" onClick={()=> {dispatch(settingsChosen(props.setting))}}>
            <div>{props.setting}</div>
            <i class="bi bi-caret-right-fill"></i>
        </div>
    )
}