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
              Our goofy adventure attracted some media attention, and the "fame = publishable" equation helped us get a book deal. Fortunately, we were ready for our moment. After honing our skills for over a decade, we could actually write. And so we created <a target="_blank" href={bookLink}>The Great Typo Hunt</a>!
              With a 36-city book tour, we sold through our hardback print run, and I expected the paperback to do even better (bookseller insight). Unfortunately, Borders was liquidated and gone a month before the paperback release date.
            </p>
            <p>
              I recognized that the business side of publishing didn't suit me. I didn't want to be self-marketing all the time; I wanted to be writing.
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
              Ever the reader, I took my cue for a new direction from some good books. <a target="_blank" href="https://www.amazon.com/Reality-Broken-Games-Better-Change/dp/0143120611">Reality Is Broken by Jane McGonigal</a> focused my attention on the "epic win" as an important element in my job hunt. Now working at Powell's with an amazing team, I still wasn't fulfilled, and part of the reason was that we never missed a deadline, our team was too good to be challenged by anything! <a target="_blank" href="https://www.amazon.com/Program-Be-Programmed-Commands-Digital/dp/159376426X">Douglas Rushkoff's Program Or Be Programmed</a>, meanwhile, made a convincing argument for becoming <em>21st-century literate</em> by learning to code.
              Oh yeah, and my partner was having an absolute blast in her first years as a developer.
            </p>
            <p onMouseOver={this.changeCounter.bind(this)}>
              I switched my writing time to coding time through 2014 and then signed up for <a target="_blank" href="https://www.learnhowtoprogram.com">Epicodus</a> to 
              accelerate the process. At Epicodus, we coded in pairs, and I even found a team to help me build bigger projects than we'd been assigned. Our group project experiment
              became such an Epic Win that we fundamentally changed the curriculum for all future Epicodus students.
            </p>
          </div>
          <div className="careerBlock">
            <h4>Second Career:</h4>
            <p>
              Through the Epicodus internship I landed at Thetus, which was such a good fit, they hired me. A PM there gave me the moniker "Benjamin BugCrusher" for my tenacity.
              On Thursday, October 8th of 2015, I worked through the logic of rendering the a complex navigation bar, and had so much fun with it that I knew I'd made the right career choice.
              Surrounded by friendly, knowledgeable teammates I amped up my JavaScript skills quickly on the <a target="_blank" href="https://en.wikipedia.org/wiki/Clurichaun">Clurichauns</a> team. When Thetus disappeared out from under us, I leapt into a role at Nike. Proving myself with the most intense QA review of my junior dev life, I earned a place on the
              team responsible for one of the largest eCommerce sites in the world, adding analytics to their B2B applications. I worked across three sites/teams to unify tracking, and though I was invited to extend my contract, the commute (this is back in the pre-covid era) was the deciding factor. 
            </p>
            <div className="zebra">
              <img src={Zebra} alt="Zebra Head"/>
              <h6>I'm on <a target="_blank" href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96#.2nw798vnf">Team Zebra</a>.</h6>
            </div>
            <p>
              When I joined HealthSparq (and returned to a walking commute). I introduced myself to the UI folks by turning their test suite green. My emphasis on quality (BugCrusher, remember?) eventually got me placed onto a team handling the highest priority issues. I even stepped up and became the Scrum Master (though no stranger to leadership roles, this was my first time leading within a technical environment).
            </p>
            <p>
              Eventually, a friend clued me into an opportunity I simply couldn't pass up, working as part of a much smaller front-end team at Lytics, then a Series B start-up. The smaller team meant I got to do more high-visibility work earlier in the process. I took ownership of the "experiences" part of the app, refactoring the wizard and working with the integrations team as we expanded the marketing campaign providers available to use. Most recently I became project lead on a complete overhaul of one of the original parts of the application, resolving some major customer pain points.
            </p>
            <p>
              I'm also active in the community. In summer 2017, I got together with two fellow Epicodus grads to found an Epicodus Alumni Meetup. I also became a co-organizer for JavaScript Admirers...then lead co-organizer. This had always been a favorite meetup among those I regularly attended, and I couldn't let it disappear (though both did go on hiatus for covid).
            </p>
            <p>
              What's next? In terms of mentorship and pair coding and pure JS skills, I'm arguably a senior now, though I'm no architect and would prefer to hover at the mid-level a while longer. My quality focus means I'll continue to prefer product companies over agencies, and getting to <em>see</em> my work will likely keep me in the UI. After 3+ years working in Ember, I wouldn't mind returning to React (which I do miss) or maybe learning a new framework. Whatever it is, there has to be a challenging element, or I won't be able to get my Epic Wins. Have you got a challenge for me? Let me know on <a href="https://www.linkedin.com/in/benjaminherson/" target="_blank" rel="noopener">LinkedIn</a> and reference <b>sharks</b> so I'll know you've been here.
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