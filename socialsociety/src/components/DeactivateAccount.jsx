import { useDispatch, useSelector } from "react-redux"
import { currentUser, resetUser } from "../features/loggedUserSlice"
import { openDeleteModal } from "../features/toggleSlice"
import axios from "axios"


export default function DeactivateAccount() {

    const url = 'http://localhost:7000'
    const dispatch = useDispatch()
    const loggedInUser = useSelector(currentUser)

    const open = () => {
        dispatch(openDeleteModal())
    }
    const destroyAccount = async () => {
        const user = loggedInUser.username
        const response = await axios.delete(url+`/delete/${user}`)
        if(response.data === 'Success.'){
            localStorage.clear()
            dispatch(resetUser())
        }
    }
    return (
        <div className="settings-account" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h5 style={{display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: 'bold'}}>
                <i class="bi bi-exclamation-triangle-fill"></i>
                <span>Deleting your account is permanent.</span>
            </h5>
            <div style={{width: '290px', textAlign: 'left'}}>
                <p>Your posts, likes, followers and comments will be permanently deleted. 
                    There is no reversing this action.
                </p>
            </div>
            <div style={{marginTop: '1rem'}}>
                <button class="btn btn-light" style={{width: '12rem'}} onClick={open}>Delete account</button>
            </div>
        </div>
    )
}