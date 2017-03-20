import React, { Component } from 'react';

class SharkImg extends Component {
  positionShark(leftShark) {
    let leftPos = leftShark ? "-90px" : "100vw"
    let topPos = leftShark ? "66vh" : "75%"
    let style = {
      maxWidth: "90px",
      position: "absolute",
      left: leftPos,
      top: topPos
    }
    if (this.props.count % 14 === 0) {
      leftPos = leftShark ? "100vw" : "-90px"
      style = {
        maxWidth: "90px",
        position: "absolute",
        left: leftPos,
        top: topPos,
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