/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

function CoverPic2() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className = 'display_image'>
            <label for="fileBtn">Upload file</label>
			<input className = 'fileBtn' type="file" onChange={handleChange} />
			<img className = 'cover' src={file} alt = 'cover photo'/>
		</div>

	);
}

export default CoverPic2;
