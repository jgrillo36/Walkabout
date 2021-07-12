import React, { Component } from 'react'
import  Results from './Results'
import Parks from './Favorites'


const Search =(props) => {
   
    
        return (
          <div>
            

            {/* <form>
              <label>
                {" "}
                Location
                <input
                  type="text"
                  name="statName"
                  placeholder="Enter state name"
                  onChange={(e) => this._handleStateChange(e)}
                ></input>
              </label>
              <button type="submit"> Search</button>
            </form> */}
                <img src="/images.jpeg" />
            <Results parks={props.parks} />
          </div>
        );
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
