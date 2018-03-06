import React, { Component } from 'react';
import Navigation from './Navigation';
import Headline from './Headline';
import SharkImg from './SharkImg';
import GreatTypoHunt from '../public/GreatTypoHunt.jpg';
import Zebra from '../public/Zebra.png';
import Icons from './Icons';

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
    const bookLink = "https://www.amazon.com/Great-Typo-Hunt-Changing-Correction/dp/0307591085"
    return (
      <div>
        <Navigation />
        <Headline />
        <div className="sharkBlock">
          <div>
            <h4>If a shark stops swimming, it dies.</h4>
            <p>
              Humans are the same, except that our swimming is learning. About pages are snapshots of people holding still, so I'm not doing one.
              This is a <b>Shark</b> page. I'm in motion. I'm on a quest to keep changing, keep learning, keep growing.
            </p>
          </div>
          
          <div>
            <h4>Childhood Dream, Accomplished:</h4>
            <p onMouseOver={this.changeCounter.bind(this)}>
              I had a plan, and it almost worked. I wrote a thousand words every day in pursuit of my childhood dream: becoming a published author.
              I even worked at Borders, hoping they'd be motivated to push my book when I made it.
              In 2008, my college buddy and long-time creative collaborator, Jeff Deck, called me up:
            </p>
            <a target="_blank" href={bookLink}>
              <img className="bookImg" src={GreatTypoHunt} alt={"Our book: The Great Typo Hunt"}/>
            </a>
            <p className="convo">Jeff: <em>Hey, I'm going on a road trip across America.</em></p>
            <p className="convo">Me: <em>I like road trips.</em></p>
            <p className="convo">Jeff: <em>It's a road trip with a mission to correct typos in signs!</em></p>
            <p className="convo" style={{marginBottom:"10px"}}>Me: <em>...I like road trips.</em></p>
            <p>
              Our goofy adventure attracted a little media attention, then a lot. Fortunately, we were more ready than most when the "fame = publishable" equation helped us get a book deal. After honing our skills for over a decade, we could actually write. And so we created <a target="_blank" href={bookLink}>The Great Typo Hunt</a>!
              With a 36-city book tour, we sold through our hardback print run, and I expected the paperback to do even better (bookseller insight). Unfortunately, by the paperback release, Borders had been liquidated.
            </p>
            <p>
              Worse, after seeing how the sausage was made, I recognized that the business side of publishing didn't suit me. I didn't want to be self-marketing all the time; I wanted to be writing.
              I'd accomplished my childhood dream, yet I somehow hadn't gotten what I'd really wanted.
              So what did I want?
            </p>
          </div>
          
          <div>
            <h4>From Text To Hypertext:</h4>
            <div className="codingPhoto">
              <div className="meAtEpicodus"></div>
              <p>photos by Grace Mekarski</p>
            </div>
            <p>
              Books began pointing me in a new direction. <a target="_blank" href="https://www.amazon.com/Reality-Broken-Games-Better-Change/dp/0143120611">Reality Is Broken by Jane McGonigal</a> really
              spoke to me, and <a target="_blank" href="https://www.amazon.com/Program-Be-Programmed-Commands-Digital/dp/159376426X">Douglas Rushkoff's Program Or Be Programmed</a> made a great argument.
              Plus, I'd already been a fan of <a target="_blank" href="https://www.amazon.com/Age-Spiritual-Machines-Computers-Intelligence/dp/0140282025">Ray Kurzweil's Age of Spiritual Machines</a> and its
              follow-up <a target="_blank" href="https://www.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0143037889">The Singularity Is Near</a>. (Can you tell I was once a bookseller?)
              Meanwhile, my partner was having an absolute blast in her first years as a developer. This cannot be understated.
            </p>
            <div className="zebra">
              <img src={Zebra} alt="Zebra Head"/>
              <h6>I'm on <a target="_blank" href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96#.2nw798vnf">Team Zebra</a>.</h6>
            </div>
            <p onMouseOver={this.changeCounter.bind(this)}>
              I finally decided to become 21st-century literate when I realized my storytelling drive could be satisfied by game-making.
              In 2014, while working at Powell's, I started learning to code, and before the year was out, I'd signed up for <a target="_blank" href="https://www.learnhowtoprogram.com">Epicodus</a> to 
              accelerate the process. At Epicodus, we coded in pairs, and I even found a team to help me build bigger projects than we'd been assigned. Our group project experiment
              became such an Epic Win that we fundamentally changed the curriculum for all future Epicodus students.
            </p>
            <p>
              Epicodus concluded with an internship at Thetus, which hired me for the same reason a PM there gave me the moniker "Benjamin BugCrusher," my tenacity.
              On Thursday, October 8th of 2015, I had my single best coding day ever, and I knew I'd made the right choice.
              I amped up my JavaScript skills quickly thanks to the great team I had at Thetus (team name: <a target="_blank" href="https://en.wikipedia.org/wiki/Clurichaun">Clurichauns</a>). At Nike, I landed on the
              team responsible for one of the largest eCommerce sites in the world, adding analytics to their B2B applications.
            </p>
            <p>
              After completing my contract with Nike, I joined HealthSparq because I believe in their mission. As I've honed in on amping up my skills as a JavaScript developer, I've also deepened my understanding of what makes a good user experience. (It's funny how that hopped off the computer screen and became a lens for viewing everything.)
              HealthSparq also offered me the opportunity to return to a leadership role (for the first time since becoming a developer) as I stepped into the role as Scrum Master.
            </p>
          </div>
          <SharkImg count={this.state.count} left={true} src={"SharkToRight.png"}/>
          <SharkImg count={this.state.count + 7} left={false} src={"SharkToLeft.png"}/>
          <Icons />
        </div>
      </div>
    )
  }
}

export default SharkPage;