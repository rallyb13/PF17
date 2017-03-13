let EventEmitter = require('events').EventEmitter;
let PfStore = new EventEmitter();

const projectData = [
  {
    name: "Quid",
    lang: "React/Firebase",
    url: "https://quid.haikuthunder.com",
    img: "Quid.png",
    caption: "My major side project for 2016 was a match-three game about political corruption.",
    more: ""
  },
  {
    name: "Chess",
    lang: "Ruby",
    url: "https://hidden-hollows-2068.herokuapp.com",
    img: "Chess.png",
    caption: "This group project at Epicodus was my first Epic Win as a junior developer.",
    more: ""
  }
];

PfStore.getProjectData = function() {
  return projectData;
};

export default PfStore;