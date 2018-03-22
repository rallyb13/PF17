import React, {Component} from 'react';

class Piece extends Component {
  componentWillMount() {
    this.setState({showFull: true})
  }
  
  togglePiece() {
    let newVal = !this.state.showFull
    this.setState({showFull: newVal})
  }
  
  render () {
    let image = <img src={this.props.img} alt={this.props.alt}/>,
      slide = this.props.url ? <a href={this.props.url} target="_blank">{image}</a> : image,
      coreDetails = <div>
              {slide}
              <p>{this.props.caption} <span onClick={this.togglePiece.bind(this)} className="more">More...</span></p>
            </div>,
      moreDetails = <div>
              <p onClick={this.togglePiece.bind(this)}>{this.props.caption} {this.props.more} <span className="more">Less</span></p>
            </div>,
      displayDetails = this.state.showFull ? coreDetails : moreDetails;
    return (
      <div className="profilePiece">
        <h4><b>{this.props.name}</b> <span className="language">in {this.props.lang}</span></h4>
        {displayDetails}
      </div>
    )
  }
  
}

export default Piece;