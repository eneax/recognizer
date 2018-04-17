import React, { Component } from 'react';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitSignin = () => {
		fetch('https://murmuring-beach-99805.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user)
					this.props.onRouteChange('home')
				}
			})
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="br4 ba b--white-50 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
				<main className="pa4 white-80 center">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	className="pa2 input-reset br4 ba bg-transparent hover-bg-black hover-white white-80 w-100" 
				        	type="text" 
				        	name="name" 
				        	id="name"
				        	onChange={this.onNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset br4 ba bg-transparent hover-bg-black hover-white white-80 w-100" 
				        	type="email" 
				        	name="email-address" 
				        	id="email-address"
				        	onChange={this.onEmailChange} 
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset br4 ba bg-transparent hover-bg-black hover-white white-80 w-100" 
				        	type="password" 
				        	name="password" 
				        	id="password" 
				        	onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmitSignin} 
				      	className="b ph3 pv2 input-reset br4 ba b--white bg-transparent white-80 grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register" 
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <p
				      	onClick={() => onRouteChange('signin')} 
				      	className="f6 link dim white-50 db pointer"
				      >
				      	Sign In
				      </p>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}

export default Register;


