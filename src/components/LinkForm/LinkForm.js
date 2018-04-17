import React from 'react';
import './LinkForm.css';

const LinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p
				style={{color: '#fff'}} 
				className='f3 center'>
				{'This Magic Magnifier will detect faces in all your pictures. Give it a try!'}
			</p>
			<div className='center'>
				<div className='center form pa4 br4 shadow-5'>
					<input 
						className='f4 pa2 w-70 center' 
						type='text'
						onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-purple'
						onClick={onButtonSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default LinkForm;