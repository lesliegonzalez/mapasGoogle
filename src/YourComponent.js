
import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps";



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
          markers={[
            {lat: 19.435140794267156, lng: -99.14128948071048},
            {lat: 19.364404237293385, lng:-99.28878214690705},
            {lat: 19.450586467247923, lng:-99.21817770272499},
            {lat: 19.36822254183596, lng:-99.26723000272631},
            {lat: 19.470000039381716, lng:-99.17092367388848},
            {lat: 19.472657050331154, lng:-99.19269852783758},
            {lat: 19.308166693114575, lng:-99.05968804505508},
            {lat: 19.31691065840043, lng:-99.12538104505495},
            {lat: 19.380568525723525, lng:-99.14111840272611},
            {lat: 19.294763332615577, lng:-99.12432901621915},
            {lat: 19.47170471308016, lng:-99.11913450272458},
            {lat: 19.53118397083147, lng:-99.15604916039588},
             
             
          ]}
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
