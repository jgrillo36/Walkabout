import React, { Component } from 'react'
import  Results from './Results'
import Parks from './Favorites'
import {Navbar,Nav,Button,Container} from 'react-bootstrap'








export class Search extends Component {
    state = {
        parks: [],
        stateCode: '',


    }
   
     _handleStateChange = (event) => {

    
      this.setState({
          stateCode: event.target.value })
    }
     _handleSubmit = (e) =>{
        e.preventDefault();
        // console.log('button is working')
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${this.state.stateCode}&api_key=9LM6ZhHeG6sKKnKjV5pzSRPS8b0DGfghndyl6m9a`)
        .then(response => response.json())
        .then(natParkData => {console.log(natParkData)
        this.setState({
             parks: natParkData.data
        })})

        
        // after fetch dispatch to redux
    }
    render() {
        return (
            <div style={ { backgroundColor: '#4a9557'} }>
                 {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
  
                 <form onSubmit = {(e) => this._handleSubmit(e)}>
               <label> Location 
                    <input 
                    type = "text" 
                    name= "statName" 
                    placeholder = "Enter state name" 
                    onChange = {(e) => this._handleStateChange(e)} >

                </input>
                </label>
                < button type= "submit"> Search
                </button>
            </form>
                <Results parks={this.state.parks} />
                 <img src="/images.jpeg"></img>

                
            </div>
        )
    }
}

export default Search

  


//         <nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <a class="navbar-brand" href="#">WebSiteName</a>
//     </div>
//     <ul class="nav navbar-nav">
//       <li class="active"><a href="#">Home</a></li>
//       <li><a href="#">Search</a></li>
//       <li><a href="#">Results</a></li>
//       <li><a href="#">Favorites</a></li>
//     </ul>
//   </div>
// </nav>
