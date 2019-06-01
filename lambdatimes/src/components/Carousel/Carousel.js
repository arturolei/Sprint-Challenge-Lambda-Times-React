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
    if(this.state.imageIndex > 0){
      this.setState(prevState => ({imageIndex: prevState.imageIndex - 1}));
    } else {
      this.setState(prevState =>({imageIndex: this.state.imageURLs.length - 1}))
    }
  }

  rightClick = () => {
    if (this.state.imageIndex < this.state.imageURLs.length - 1){
      this.setState(prevState => ({imageIndex: prevState.imageIndex + 1}))
    } else {
      this.setState(prevState => ({imageIndex:0}))
    }
  }

  selectedImage = () => {
    return <img src={this.state.imageURLs[this.state.imageIndex]} style={{display: 'block'}} alt={this.state.imageURLs[this.state.imageIndex]} />
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