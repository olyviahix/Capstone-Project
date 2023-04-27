/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Male from '../Images/MaleIcon.png';
import Female from '../Images/FemaleIcon.png';

function Avatar() {
	const [file, setFile] = useState(Male);
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

	const handleChange = () => {
		let value = file;
	// 	console.log(e.target.files);
	// 	setFile(URL.createObjectURL(e.target.files[0]));

		if(value === Male) {
			setFile(Female);
		} else {
			setFile(Male);
		}
	}

	return (
		<div className = 'profile-pic'>
            {/* <label for="fileBtn">Upload file</label> */}
			
			<img className = 'avatar' src={file} alt = ''/>
			<br />
			<button 
				style = {changeBtn}
				className = 'changeBtn' 
				onClick={handleChange}
				onMouseEnter = {handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>Change</button>
		</div>

	);
}

export default Avatar;