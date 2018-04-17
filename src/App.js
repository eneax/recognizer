import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import LinkForm from './components/LinkForm/LinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';


const particlesConfig = {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('https://murmuring-beach-99805.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then((response) => {
        if (response) {
          fetch('https://murmuring-beach-99805.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => this.setState(Object.assign(this.state.user, {'entries': count})))
          .catch(console.log)
        }
        this.displayBox(this.calculateFaceLocation(response))
      })
      .catch((err) => console.log(err) );
  }
  
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions.map( box => box.region_info.bounding_box)
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const box = clarifaiFace.map( face => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    });
    return box;
  }
  
  displayBox = (box) => {
    this.setState({box: box});
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);  
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }
  
  render() {
    const { isSignedIn, imageUrl, box, route } = this.state;
    return (
      <div>
        <Particles 
          className='particles'
          params={particlesConfig}
        />
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {
          route === 'home'
            ? <div>
                <Logo />
                <Rank 
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
                <LinkForm 
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition 
                  imageUrl={imageUrl}
                  box={box}
                />
              </div>
            : (
                route === 'signin'
                  ? <Signin 
                      onRouteChange={this.onRouteChange}
                      loadUser={this.loadUser}
                    /> 
                  : <Register 
                      onRouteChange={this.onRouteChange}
                      loadUser={this.loadUser}
                    /> 
              )
        }    
      </div> 
    )
  }
}

export default App;
