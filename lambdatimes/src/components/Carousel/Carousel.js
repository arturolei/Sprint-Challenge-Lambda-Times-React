import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageURLs:[],
      imageIndex:0
    }
  }
  componentDidMount(){
    this.setState({imageURLs: carouselData})
  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={this.state.imageURLs[this.state.imageIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}