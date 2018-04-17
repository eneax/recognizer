import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	const faces = box.map( (face, i) => { return <div key={i} className='bounding-box' style={{top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol}}></div>})
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img 
					src={imageUrl} 
					alt='' 
					width='500px' 
					height='auto' 
					id='inputImage'
				/>
				{faces}
			</div>
		</div>
	)
}

export default FaceRecognition;