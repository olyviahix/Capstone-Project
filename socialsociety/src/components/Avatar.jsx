/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

function Avatar() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className = 'profile-pic'>
            <label for="fileBtn">Upload file</label>
			<input className = 'fileBtn' type="file" onChange={handleChange} />
			<img className = 'avatar' src={file} alt = 'avatar'/>
		</div>

	);
}

export default Avatar;