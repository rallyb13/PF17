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
              &#011;&#011;It's much the same with humans, except that our swimming is learning.
              Sure, we can stumble along like we're avoiding Rick Grimes, but for what?
              I need to keep changing, keep charging, keep growing, keep learning.
              About pages are snapshots of people holding still, so I'm not doing one.
              This a <b>Shark</b> page. I'm in motion. I'm on a quest. If you are too, maybe we'll meet up somewhere.
            </p>
          </div>
          
          <div>
            <h4>Childhood Dream, Accomplished:</h4>
            <p onMouseOver={this.changeCounter.bind(this)}>
              &#011;&#011;I had a plan, and it almost worked. I wanted to make it as an author. I wrote a thousand words everyday.
              The really clever part? I worked at a national bookstore chain so that when I made it, they'd be motivated to push my book as one of their own.
              Surely, working with inventory is also fun, but that's not important right now.
              In 2010, my college buddy and former roommate Jeff Deck, an editor and long-time creative collaborator, brought me along on a crazy adventure.
              It went like this:
            </p>
            <a target="_blank" href={bookLink}>
              <img className="bookImg" src={GreatTypoHunt} alt={"Our book: The Great Typo Hunt"}/>
            </a>
            <p className="convo">Jeff: <em>Hey, I'm going on a road trip across America.</em></p>
            <p className="convo">Me: <em>I like road trips.</em></p>
            <p className="convo">Jeff: <em>It's a road trip with a mission to correct typos in signs!</em></p>
            <p className="convo" style={{marginBottom:"10px"}}>Me: <em>...I like road trips.</em></p>
            <p>
              &#011;&#011;Our goofy adventure attracted a little media attention, then a lot, and soon we were on television.
              Fortunately, we were ready for our moment more than most when the "fame = publishable" equation helped us get a book deal. We could write.
              We'd both been honing our skills for over a decade, and so we wrote <a target="_blank" href={bookLink}>The Great Typo Hunt</a>!
              Even better, my plan worked! Borders got behind us, giving us front table placement and booking nearly half the events in our 36-city book tour.
              The paperback, which (with my formidable book knowledge) I expected to do even better given the right front table placement, would be released in late summer 2011.
              Unfortunately, that same summer, Borders was liquidated.
            </p>
            <p>
              &#011;&#011;Worse, after seeing how the sausage was made, I recognized that the publishing industry wasn't working right.
              It's not writing itself that I wanted to step away from, but the business side of it didn't suit me. I didn't want to be self-marketing all the time; I wanted to be writing.
              I'd had a good run. I'd accomplished my childhood dream of being published, yet I somehow hadn't gotten what I'd really wanted out of it.
              So what did I want?
            </p>
          </div>
          
          <div>
            <h4>From Text To Hypertext:</h4>
            <div className="meAtEpicodus"></div>
            <p>
              &#011;&#011;Books began pointing me in a new direction. <a target="_blank" href="https://www.amazon.com/Reality-Broken-Games-Better-Change/dp/0143120611">Reality Is Broken by Jane McGonigal</a> really
              spoke to me, and <a target="_blank" href="https://www.amazon.com/Program-Be-Programmed-Commands-Digital/dp/159376426X">Douglas Rushkoff's Program Or Be Programmed</a> made a great argument.
              Plus, I'd already been a fan of <a target="_blank" href="https://www.amazon.com/Age-Spiritual-Machines-Computers-Intelligence/dp/0140282025">Ray Kurzweil's Age of Spiritual Machines</a> and its
              follow-up <a target="_blank" href="https://www.amazon.com/Singularity-Near-Humans-Transcend-Biology/dp/0143037889">The Singularity Is Near</a>. (Can you tell I was once a bookseller?)
              Meanwhile, my partner was having an absolute blast in her first years as a developer. This cannot be understated.
            </p>
            <p onMouseOver={this.changeCounter.bind(this)}>
              &#011;&#011;The storytelling impetus remained with me. As had the desire to take on large, ambitious projects. I like the feeling of an Epic Win, and that means the possibility of failure.
              A self-identified ambivert, I also wanted my next adventure to include something I'd had at work, but not as a writer: a team.
              The best fun I had at work was on teams, and I spent the vast majority of my 12 years in the book industry as a supervisor or team lead.
            </p>
            <div className="zebra">
              <img src={Zebra} alt="Zebra Head"/>
              <h6>I'm on <a target="_blank" href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96#.2nw798vnf">Team Zebra</a>.</h6>
            </div>
            <p>
              &#011;&#011;I finally decided to become 21st-century literate when I realized my storytelling drive could be satisfied by game-making.
              In 2014, while working at Powell's, I started learning to code, and before the year was out, I'd signed up for <a target="_blank" href="https://www.learnhowtoprogram.com">Epicodus</a> to 
              accelerate the process. At Epicodus, we coded in pairs, and I even found a team to help me build bigger projects than we'd been assigned. Our group project experiment
              became such an Epic Win that we'd fundamentally changed the curriculum for all the students who would come after us. It also gave me the sense that I'd made the right decision.
            </p>
            <p>
              &#011;&#011;My internship through Epicodus led directly to my being hired at Thetus, where I picked up the moniker "Benjamin BugCrusher" for my tenacity in picking up bug tickets.
              On Thursday, October 8th of 2015, I had my single best coding day ever (which is a story in itself, involving maths), and I knew for certain I'd made the right choice.
              I amped up my JavaScript skills quickly thanks to the great team I had at Thetus (team name: <a target="_blank" href="https://en.wikipedia.org/wiki/Clurichaun">Clurichauns</a>). At Nike, I landed on the
              team responsible for one of the largest eCommerce sites in the world, adding analytics to their B2B applications.
            </p>
            <p>
              &#011;&#011;And I'm still learning, still growing. Even as I'd like to continue the deep dive into JavaScript to become a true expert-level front-end dev,
              I'm learning Unity (and C#) in order to continue building games. Seeing as the game ideas keep stacking up in my brain faster than I can code them alone, I've brought some friends together and formed a team.
              The interest in Unity also supports my intention to get in at the ground floor as AR/VR stuff becomes accessible/available. I see a LOT of potential for a whole new user experience.
              I'm a regular at React and Ember MeetUps, and frequent others. Most recently, I started a hack night for my fellow Epicodus Alumni. Warren Zevon said it best: "I'll sleep when I'm dead!"
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