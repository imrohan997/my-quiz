var readlineSync = require('readline-sync');
var username=readlineSync.question("Enter your name ");

console.log();
console.log("Welcome "+username+"!How well do you know Rohan? ");
console.log("-------------------------------------")
var score=0;

function play(question,answer){
  var currentAnswer=readlineSync.question(question);
  if(currentAnswer.toLowerCase()===answer.toLowerCase()){
    score++;
    console.log("You are right!");
  }else{
    console.log("You are wrong");
  }

  console.log("Your current score is:"+score);
  console.log("-----------------------");
}

var questionOne={
  question:"Where does Rohan live?",
  answer:"Delhi"
}

var questionTwo={
  question:"From where does Rohan completed his schooling?",
  answer:"NC Jindal Public School"
}

var questionThree={
  question:"From where does Rohan completed his engineering?",
  answer:"Maharaja Agrasen Institute of Technology"
}

var questionFour={
  question:"Who is Rohan's favourite youtuber?",
  answer:"Mohak Mangal"
}

var questionFive={
  question:"When is Rohan's birthday?(DD-MM-YYYY)",
  answer:"12-11-1997"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(var i=0;i<questions.length;++i){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log();
console.log();
console.log();
if(score<3){
  console.log("Your final score is:"+score);
  console.log("You need to know him more");
}else{
  console.log("Your final score is:"+score);
  console.log("Congrats!!You know Rohan fairly well");
}







