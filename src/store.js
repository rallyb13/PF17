let EventEmitter = require('events').EventEmitter;
let PfStore = new EventEmitter();

const projectData = [
  {
    name: "Quid",
    lang: "React/Firebase",
    url: "https://quid.haikuthunder.com",
    img: "Quid.png",
    alt: "Quid, a match three game",
    caption: "My major side project for 2016 was a match-three game about political corruption. ",
    more: "Originally, I only wanted to test out my ability to make a fully-playable game. Doing such a large project with my own specific goals allowed me to not only amp up my JS skills, but see the whole development process. I kept a trello board and broke everything into tickets, even deciding a few ideas could sit out for MVP. The biggest highlight was the back-to-back success of making recursive matching (you place a token where it makes a match and the newly created token also makes a match) work then then the wild card (megaphone token). As a guy who always works best with a team, though, I couldn't leave my friends out and brought them over for mini-hackithons, occasionally acting more as project manager. I plan to rebuild the game in C# using Unity with a small game design team I've formed."
  },
  {
    name: "Text Adventure",
    lang: "Unity/C#",
    url: "http://gamebucket.io/game/1059a037-6535-4727-ba5f-f6ccee585abf",
    img: "TextAdv.png",
    alt: "Opening screen for a text adventure game",
    caption: "I'm learning Unity and C#! This is from one of the tutorials. ",
    more: "Up on gamebucket for only a month, this is the latest game (that I'm proud of), a simple text-based game. The nice thing about a tutorial slow enough for people just learning to code is that I can apply a dash of more advanced coding logic to even these early games (if you make it into the forest, see what happens when you keep choosing R to Run)."
  },
  {
    name: "Chess",
    lang: "Ruby",
    url: "https://hidden-hollows-2068.herokuapp.com",
    img: "Chess.png",
    alt: "Chess, built in week 5 of Epicodus",
    caption: "This group project at Epicodus was my first Epic Win as a developer. ",
    more: "The assignment was to build one of the smaller, suggested projects across a full week as a pair coding project. Wanting to get more experience with git (and working with other people's code), I formed a 4-person team and as two pairs we built Go Fish, which was too easy. So on Wednesday I formed a new team and we went even bigger: we'd build Chess. We white-boarded as a team and changed pairs every day. Soon we had rooks that could move. Then we had bishops too, and pieces got captured. The pawns went up last (satisfying moment of logic: for determining the validity of a pawn's move, you have to check for an opponent's presence first). Our success was so EPIC that it forever changed how the Epicodus curriculum as group projects became the conclusion to each unit. This is the game that started it all."
  }
];

PfStore.getProjectData = function() {
  return projectData;
};

export default PfStore;