var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');


console.log(`Welcome ${userName} do you know shubham`);

var score=0;

function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    console.log("right!");
    score++;
  }else{
    console.log("wrong!");
    
  }
  console.log("current score: ",score);
  console.log("-------------");
}

var questionOne={
  question:"From which State i belongs to ?",
  answer:"UP"
}

var questionTwo={
  question:"My favorite superhero would be?",
  answer:"Superman"
}

var questionThree={
  question:"My favorite fruit?",
  answer:"Mango"
}

var questionFour={
  question:"My University name?",
  answer:"Chandigarh University"
}

var questionFive={
  question:"My favorite mentor?",
  answer:"Tanay Partap"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}


