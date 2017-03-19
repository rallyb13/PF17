import React, { Component } from 'react';

class SharkImg extends Component {
  positionShark(leftShark) {
    let leftPos = leftShark ? "-10vw" : "100vw"
    let style = {
      maxWidth: "7.5%",
      position: "absolute",
      left: leftPos,
      top: "66vh"
    }
    if (this.props.count % 14 === 0) {
      leftPos = leftShark ? "100vw" : "-10vw"
      style = {
        maxWidth: "7.5%",
        position: "absolute",
        left: leftPos,
        top: "66vh",
        transition: "3s ease"
      }
    }
    return style
  }

  render () {
    return (
      <img style={this.positionShark(this.props.left)} src={this.props.src} alt={"Shark."} />
    )
  }
}

export default SharkImg