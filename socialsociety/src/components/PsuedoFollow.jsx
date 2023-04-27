import { useState } from 'react';

//This will be the code im start from scratch to make my own follow button
function PsuedoFol() {
    const [fol, setFol] = useState('Follow');
    const [hover, setHover] = useState(false); 
    
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
    //trying to use this for the unfollow btn
    // const unFollowBtn = {
    //     color: hover ? 'white' : 'black',
    //     backgroundColor: hover ? 'red' : 'white'
    // }

    const handleClick = () => {
        let value = fol;

        if(value === 'Follow'){
            setFol('Following')
        } else if (value === 'Following'){
            setFol('Unfollow');
        } else {
            setFol('Follow')
        }
    }

    return (
        <div>
            <button 
                style = {changeBtn}
                className = 'PsuBtn' 
                onClick = {handleClick}
                onMouseEnter = {handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >{fol}</button>
        </div>
    )
}
export default PsuedoFol;