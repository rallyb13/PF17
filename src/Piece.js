import React, {Component} from 'react';

class Piece extends Component {
  render () {
    return (
      <div className="profilePiece">
        <h4><b>{this.props.name}</b> <span className="language">in {this.props.lang}</span></h4>
        <a href={this.props.url} target="_blank"><img src={this.props.img} /></a>
        <p>{this.props.caption} <span onClick={this.togglePiece} className="more">More...</span></p>
      </div>
    )
  }
  
  togglePiece() {
    console.log('I DID IT!');
  }
}

export default Piece;