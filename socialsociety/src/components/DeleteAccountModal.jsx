import { useDispatch, useSelector } from "react-redux"
import { currentUser, resetUser } from "../features/loggedUserSlice"
import { setToggle, openDeleteModal } from "../features/toggleSlice"
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function DeleteAccountModal(){
    const url = 'http://localhost:7000'
    const dispatch = useDispatch()
    const modal = useSelector(setToggle);
    const loggedInUser = useSelector(currentUser)

    const hide = () => {
        dispatch(openDeleteModal());
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
        <Modal show={modal.deleteModal} onHide={hide} animation={true} centered>
                <Modal.Body style={{textAlign: 'center', padding: '30px'}} closeButton>
                    <h4>Are you sure you want to delete your account?</h4>
                    This will be permanent.
                </Modal.Body>
                <Modal.Footer style={{justifyContent: 'center', flexDirection: 'column'}}>
                    <Button className="button" >Yes</Button>
                    <Button className="button" onClick={hide}>No</Button>
                </Modal.Footer>
        </Modal>
    )
}