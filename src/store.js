let EventEmitter = require('events').EventEmitter;
let PfStore = new EventEmitter();

const projectData = [
  {
    name: "Lytics",
    lang: "Ember",
    url: "",
    img: "lytics-auths.png",
    alt: "Lytics, the authorizations list",
    caption: "As part of a small UI team, I always got to work on the important things. ",
    more: "I even got to lead the effort to refactor one of our oldest, most heavily-used, and complained-about parts of the application: the UI for handling Lytics integrations with other marketing service providers. We worked in iterative releases building new features and reorganizing old ones for better useability. Customer feedback was immediate and entirely positive.",
  },
  {
    name: "HealthSparq",
    lang: "Ember",
    url: "",
    img: "hsq.png",
    alt: "HealthSparq, search results page",
    caption: "I worked on the Search Experience team at HealthSparq. ",
    more: "This was central to the application, a doctor finder that users accessed through their insurers that would help them find in-network healthcare providers and offer expected costs for procedures. It did more than that, even, but search results was where I lived...until new projects spun up and I became part of the Core Team, doing the highest-priority work across the application. Of my first three tech jobs, this is the only thing I've worked on that's public enough for me to offer a look at it on my profile."
  },
  {
    name: "Quid",
    lang: "React/Firebase",
    url: "https://quid.haikuthunder.com",
    img: "Quid.png",
    alt: "Quid, a match three game",
    caption: "My major side project for 2016 was a match-three game about political corruption. ",
    more: "Originally, I only wanted to test out my ability to make a fully-playable game. Doing such a large project with my own specific goals allowed me to not only amp up my JS skills, but see the whole development process. I kept a Trello board and broke everything into tickets, even holding off on some ideas to get to an Minimum Viable Product. The biggest highlight was the back-to-back success of making recursive matching (you place a token where it makes a match and the newly created token also makes a match) work and then the wild card (megaphone token). As a guy who always works best with a team, though, I couldn't leave my friends out and brought them over for mini-hackathons, occasionally acting more as project manager. I plan to rebuild the game in C# using Unity with a small game design team I've formed."
  },
  {
    name: "Text Adventure",
    lang: "Unity/C#",
    url: "http://bherson.com/textadv",
    img: "TextAdv.png",
    alt: "Opening screen for a text adventure game",
    caption: "I'm learning Unity and C#! This is from one of the tutorials. ",
    more: "It's a simple text-based game. The nice thing about a tutorial slow enough for people just learning to code is that I can apply a dash of more advanced coding logic to even these early games (if you make it into the forest, see what happens when you keep choosing R to Run). Can you puzzle out how to escape?"
  },
  {
    name: "Chess",
    lang: "Ruby",
    url: "https://hidden-hollows-2068.herokuapp.com",
    img: "Chess.png",
    alt: "Chess, built in week 5 of Epicodus",
    caption: "This group project at Epicodus was my first Epic Win as a developer. ",
    more: "The assignment was to build one of the smaller, suggested projects across a full week as a pair coding project. Wanting to get more experience with git (and working with other people's code), I formed a 4-person team and as two pairs we built Go Fish, which was too easy. So on Wednesday I formed a new team and we went even bigger: we'd build a chess game. We white-boarded as a team and changed pairs every day. Soon we had rooks that could move. Then we had bishops too, and pieces got captured. The pawns went up last (satisfying moment of logic: for determining the validity of a pawn's move, you have to check for an opponent's presence first). Our success was so EPIC that it forever changed the Epicodus curriculum, inspiriing the instructors to make group projects the conclusion of each course unit. This is the game that started it all."
  }
];

PfStore.getProjectData = function() {
  return projectData;
};

export default PfStore;