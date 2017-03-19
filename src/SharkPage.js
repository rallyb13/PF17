import React, { Component } from 'react';
import Navigation from './Navigation';
import Headline from './Headline';
import SharkImg from './SharkImg';

class SharkPage extends Component {
  componentWillMount() {
    this.setState({count: 3})
  }

  changeCounter() {
    let newCount = this.state.count
    newCount++
    this.setState({count: newCount})
  }
  
  render() {
    return (
      <div>
        <Navigation />
        <Headline />
        <div className="sharkBlock">
          <p>If a shark stops swimming, it dies.</p>
          <p onMouseOver={this.changeCounter.bind(this)}>
            It's much the same with humans, except that our swimming is learning.
            Sure, we can stumble along like we're avoiding Rick Grimes, but for what?
            I need to keep changing, keep charging, keep growing, keep learning.
            About pages are snapshots of people holding still, so I'm not doing one.
            This a <b>Shark</b> page. I'm in motion. I'm on a quest. If you are too, maybe we'll meet up somewhere.
          </p>
          <p>
            I had a plan, and it almost worked. I wanted to make it as an author. I wrote a thousand words everyday.
            The really clever part? I worked at a national bookstore chain so that when I made it, they'd be motivated to push my book as one of their own.
            Surely, working with inventory is also fun, but that's not important right now.
            In 2010, my college buddy and former roommate Jeff Deck, an editor and long-time creative collaborator, brought me along on a crazy adventure.
            It went like this:
          </p>
          <p className="convo">Jeff: <em>Hey, I'm going on a road trip across America.</em></p>
          <p className="convo">Me: <em>I like road trips.</em></p>
          <p className="convo">Jeff: <em>It's a road trip with a mission to correct typos in signs!</em></p>
          <p className="convo">Me: <em>...I like road trips.</em></p>

          <SharkImg count={this.state.count} left={true} src={"SharkToRight.png"}/>
          <SharkImg count={this.state.count + 7} left={false} src={"SharkToLeft.png"}/>
        </div>
      </div>
    )
  }
}

export default SharkPage;