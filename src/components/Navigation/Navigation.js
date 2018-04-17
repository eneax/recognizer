import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end', color:'#fff'}}>
				<p 
					onClick={() => onRouteChange('signout')} 
					className='f3 pa3 link underline dim pointer'>
					Sign Out
				</p>
			</nav>
		)
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end', color:'#fff'}}>
				<p 
					onClick={() => onRouteChange('signin')} 
					className='f3 pa3 link underline dim pointer'>
					Sign In
				</p>
				<p 
					onClick={() => onRouteChange('register')} 
					className='f3 pa3 link underline dim pointer'>
					Register
				</p>
			</nav>
		)
	}
}

export default Navigation;