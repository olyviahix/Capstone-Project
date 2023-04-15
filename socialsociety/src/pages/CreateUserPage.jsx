import CreateUser from "../components/CreateUser";
import { useSelector } from "react-redux";
import { currentUser } from "../features/loggedUserSlice";
import Home from '../pages/Home'

export default function CreateUserPage() {
    const loggedUser = useSelector(currentUser);
    if(loggedUser !== null){
        return (
            <div className="App">
                <Home/>
            </div>
        )
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
            <CreateUser/>
        </div>
    )
}