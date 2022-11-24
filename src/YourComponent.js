import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps";
/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {

  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>
        <GoogleMaps
          apiKey={"AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A"}
          style={{height: "400px", width: "1000px"}}
          zoom={10}
          center={{
            lat: 19.435140794267156, 
            lng: -99.14128948071048
          }}
          markers={{
            lat: 19.435140794267156, 
            lng: -99.14128948071048
          }}
        />
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};