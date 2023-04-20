import { useSelector } from "react-redux";
import { currentUser } from "../features/loggedUserSlice";

export default function AccountInfo() {
    const loggedInUser = useSelector(currentUser);
    return (
        <form style={{color: '#fff'}}>
            Username: <input style={{color: '#fff'}} type='text' class="form-control me-2" value={loggedInUser.username} disabled/>
            Password:  <div style={{color: '#fff'}} class="input-group mb-3">
                            <input type='text' class="form-control" value={loggedInUser.password} aria-label="Recipient's username" aria-describedby="basic-addon2" disabled/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button">Show</button>
                                </div>
                        </div>
                    <br/>
            First Name: <input style={{color: '#fff'}} type='text' class="form-control me-2" value={loggedInUser.firstName} disabled/>
            Last Name: <input style={{color: '#fff'}} type='text' class="form-control me-2" value={loggedInUser.lastName} disabled/>
                    <br/>
            Email: <input style={{color: '#fff'}} type='text' class="form-control me-2" value={loggedInUser.email} disabled/>
        </form>
    )
}