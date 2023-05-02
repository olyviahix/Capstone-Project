import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../features/loggedUserSlice';
import axios from 'axios';

//This will be the code im start from scratch to make my own follow button
function PsuedoFol() {

    const url = 'http://localhost:7000';
    const loggedInUser = useSelector(currentUser);

    const [fol, setFol] = useState('Socialize');
    const [hover, setHover] = useState(false); 
    // const [stay, setStay] = useState(false); //using this code to keep button one color when pressed
    
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    }
    //code to change the color of the item when mouse is hovering
    const changeBtn = {
        color: hover ? 'white' : 'black',
        backgroundColor: hover ? 'blue' : 'white',
    }

    // const stayBtn1 = {
    //     color: stay ? 'white' : 'yellow',
    //     backgroundColor: stay ? 'red' : 'white',
    // }

    const handleClick = () => {
        let value = fol;
        const displayUser = document.getElementById('display-user');

        const addUser = {
            username: loggedInUser.username
        }
        
        if(value === 'Socialize'){
            axios.post(url + '/user', addUser).then(response => {
                console.log('posting')
                if(response.data === 'Success.'){
                    console.log('Post added successfully')
                    displayUser.style.display = 'none';
                }

            });
            setFol('Socializing')
        } else {
            // axios.delete(url + '/user').then(() =>)
            setFol('Socialize')
        }
    }

    return (
        <div>
            <button 
                style = {changeBtn}
                className = 'PsuBtn' 
                onClick = {() => {
                    handleClick();
                }}
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
            >{fol}</button>
        </div>
    )
}
export default PsuedoFol;