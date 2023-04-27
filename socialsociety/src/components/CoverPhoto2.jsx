/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Pancakes from '../Images/pancakes.jpg';
import Salad from '../Images/salad.jpg';
import HeadPhones from '../Images/headphones.jpeg';
import Dj from '../Images/dj.jpeg';
import Movies from '../Images/movies1.jpeg';

function CoverPic2() {

	const [cover, setCover] = useState(Pancakes);

	const [hover, setHover] = useState(false); 
    
    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    }

    const changeBtn = {
        color: hover ? 'white' : 'black',
        backgroundColor: hover ? 'blue' : 'white',
    }


	const handleClick = () => {
		
		let value = cover;

		if(value === Pancakes) {
			setCover(Salad);
		} else if (value === Salad){
			setCover(HeadPhones);
		} else if (value === HeadPhones) {
			setCover(Dj);
		} else if (value === Dj) {
			setCover(Movies);
		} else {
			setCover(Pancakes);
		}
	};

	return (
	
		<div className = 'display_image'>
			<img className = 'cover' src = {cover} alt =''/> 
			<button 
				style = {changeBtn}
				className = 'changeBtn' 
				onClick = {handleClick} 
				onMouseEnter = {handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>Change</button>
		</div>

	);
}

export default CoverPic2;
