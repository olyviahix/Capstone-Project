import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { openLogOut, setToggle } from '../features/toggleSlice';
import { resetUser } from '../features/loggedUserSlice';

export default function LogOutModal(){
    const modal = useSelector(setToggle);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch(openLogOut());
    }
    const logout = () => {
        localStorage.clear();
        dispatch(resetUser());
        dispatch(openLogOut());
    }
    return (
        <Modal show={modal.logOutModal} onHide={hide} animation={true} centered>
                <Modal.Body style={{textAlign: 'left', padding: '30px'}} closeButton>
                    <h4>Log Out of Social Society?</h4>
                    You can log back in at any time!
                </Modal.Body>
                <Modal.Footer style={{justifyContent: 'center', flexDirection: 'column'}}>
                    <Button className="button" onClick={logout}>Yes</Button>
                    <Button className="button" onClick={hide}>No</Button>
                </Modal.Footer>
        </Modal>
    )
}