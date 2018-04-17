import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br4 shadow-2" options={{ max : 55 }} style={{ height: 175, width: 175 }} >
				<div className="Tilt-inner pa4">
					<img 
						style={{paddingTop: '15px'}} 
						src={logo} 
						alt='Logo'
					/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;