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
              Fortunately, we were more ready than most when, our goofy adventure having attracted some media attention, the "fame = publishable" equation helped us get a book deal. After honing our skills for over a decade, we could actually write. And so we created <a target="_blank" href={bookLink}>The Great Typo Hunt</a>!
              With a 36-city book tour, we sold through our hardback print run, and I expected the paperback to do even better (bookseller insight). Unfortunately, by the paperback release, Borders had been liquidated.
            </p>
            <p>
              After seeing how the sausage was made, I recognized that the business side of publishing didn't suit me. I didn't want to be self-marketing all the time; I wanted to be writing.
              I'd accomplished my childhood dream (Hooray!), but, in the words of Jed Bartlet, "What's Next?"
            </p>
          </div>
          
          <div>
            <h4>From Text To Hypertext:</h4>
            <div className="codingPhoto">
              <div className="meAtEpicodus"></div>
              <p>photos by Grace Mekarski</p>
            </div>
            <p>
              Ever the reader, I took my cue for a new direction from some good books. <a target="_blank" href="https://www.amazon.com/Reality-Broken-Games-Better-Change/dp/0143120611">Reality Is Broken by Jane McGonigal</a> really
              spoke to me, and <a target="_blank" href="https://www.amazon.com/Program-Be-Programmed-Commands-Digital/dp/159376426X">Douglas Rushkoff's Program Or Be Programmed</a> made a great argument.
              Plus, I'd already been a fan of <a target="_blank" href="https://www.amazon.com/Age-Spiritual-Machines-Computers-Intelligence/dp/0140282025">Ray Kurzweil's Age of Spiritual Machines</a> and its
              follow-up <a target="_blank" href="https://www.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0143037889">The Singularity Is Near</a>.
              Oh yeah, and my partner was having an absolute blast in her first years as a developer.
            </p>
            <p onMouseOver={this.changeCounter.bind(this)}>
              In 2014, while working at Powell's, I started learning to code, and before the year was out, I'd signed up for <a target="_blank" href="https://www.learnhowtoprogram.com">Epicodus</a> to 
              accelerate the process. At Epicodus, we coded in pairs, and I even found a team to help me build bigger projects than we'd been assigned. Our group project experiment
              became such an Epic Win that we fundamentally changed the curriculum for all future Epicodus students.
            </p>
            <p>
              Epicodus concluded with an internship at Thetus, which was such a good fit, they hired me. A PM there gave me the moniker "Benjamin BugCrusher" for my tenacity.
              On Thursday, October 8th of 2015, I worked through the logic of rendering the a complex navigation bar, and had so much fun with it that I knew I'd made the right choice.
              I amped up my JavaScript skills quickly thanks to the great team I had at Thetus (team name: <a target="_blank" href="https://en.wikipedia.org/wiki/Clurichaun">Clurichauns</a>). When Thetus disappeared out from under us, I leapt into a role at Nike. Somehow landing on the
              team responsible for one of the largest eCommerce sites in the world, adding analytics to their B2B applications.
            </p>
            <div className="zebra">
              <img src={Zebra} alt="Zebra Head"/>
              <h6>I'm on <a target="_blank" href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96#.2nw798vnf">Team Zebra</a>.</h6>
            </div>
            <p>
              After completing my contract with Nike, I joined HealthSparq, introducing myself by turning their test suite green. My emphasis on quality (BugCrusher, remember?) eventually got me placed onto a team handling the highest priority issues. The new team got off to a bumpy start, so I stepped up and became the Scrum Master (though no stranger to leadership roles, this was my first since learning to code).
            </p>
            <p>I'd planned to stay longer at HealthSparq, but a friend clued me into an opportunity I simply couldn't pass up, working as part of a much smaller front-end team at <span title="Someone finally said: Gee, maybe relentlessly spamming everyone ain't a great way to build trust in your brand, kids."> Lytics, a start-up that actually <em>applies</em> data analytics to marketing</span>. With more data visualization work and opportunities to dig into data science, I've got a lot more to learn, which is just how I like it. Plus, the smaller team means I get to do more of the high visibility work, see my code in production.</p>
            <p>Meanwhile, I'm co-organizing a couple MeetUps. In summer 2017, I got together with two fellow Epicodus grads to found an Epicodus Alumni Meetup. Somehow I also ended up stepping in as an additional co-organizer for JavaScript Admirers, which has long been one of my favorite MeetUps in town. I regularely attend the React Meetup, irregularly attend Node, and pop up at some others. I guess you could say I've gone All In on this tech lifestyle. There's a simple reason for that.</p>
            <p>I found my people. In DC it was Poetry Slam and booksellers, but in Portland, it's been tech folks, my Epicoders in particular. Challenge-loving, creative thinkers who aren't ashamed to nerd out, can talk with you for hours about nothing or everything, and share a vision for the positive potential of tech. And what are we up to next? Well, this story is only beginning...</p>
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