var chalk = require("chalk")
var readlineSync = require("readline-sync");
var name = readlineSync.question(chalk.blueBright.bgBlack("Enter your name: \n") );
var ready = readlineSync.question(chalk.blueBright.bgBlack("\n"+"Ok "+name+" Let's begin the F.R.I.E.N.D.S quiz!!"+"\n Click enter>> \n"));
var score = 0;

function quiz(question,myAnswer){
  var yourAnswer = readlineSync.question(question)

  if(yourAnswer.toLowerCase() === myAnswer.toLowerCase()) {
    console.log(chalk.greenBright.bgBlack("You're right!"))
    score++;
  }else {
    console.log(chalk.redBright.bgBlack("Wrong answer :("))
    console.log(chalk.yellowBright.bgBlack("Right answer is: " + myAnswer + "!"))
  }
}

var questions = [
  {
    question:chalk.cyanBright.bgBlack("1.Who is the most sarcastic guy in the show? \n"),
    answer:"chandler" 
  },
  {
    question:chalk.cyanBright.bgBlack("2.Who doesn't share food? \n"),
    answer:"joey"
  },
    {
    question:chalk.cyanBright.bgBlack("3.Who is the paleontologist? \n"),
    answer:"ross"
  },
  {
    question:chalk.cyanBright.bgBlack("4.What was the roll of joey in "+ "Days of our life? \n"),
    answer:"doctor"
  },
  {
    question:chalk.cyanBright.bgBlack("5.What is chandler's full name? \n"),
    answer:"chandler bing"
  },
  {
    question:chalk.cyanBright.bgBlack("6.Was Carol Ross's first wife? \n <yes or no> \n"),
    answer:"yes"
  },
  {
    question:chalk.cyanBright.bgBlack("7.Did Joey own a Porsche? \n <yes or no> \n"),
    answer:"no"
  },
  {
    question:chalk.cyanBright.bgBlack("8.Which is the most famous composition of Phoebe? \n A.Smelly dog  \n B.Smelly cat \n C.Smelly pig \n D.Smelly rat \n"),
    answer:"B"
  },
  {
    question:chalk.cyanBright.bgBlack("9.How many seasons of the show are there? \n A.Seven seasons \n B.Nine seasons \n C.Ten seasons \n D.Eleven seasons \n"),
    answer:"C"
  },
  {
    question:chalk.cyanBright.bgBlack("10.Who was mugged by Phoebe in childhood? \n A.Ross \n B.Joey \n C.Frank.jr \n D.Chandler \n"),
    answer:"A"
  },
]

for(var i=0; i<questions.length; i++){
  var thisQuestion = questions[i];
  quiz(thisQuestion.question,thisQuestion.answer);
  console.log("\n");
}


var highScores = [
  {
    name: "nags",
    score: 8
  },
  {
    name: "raju",
    score: 6
  },
  {
    name: "sandy",
    score: 7
  },
  {
    name: name,
    score: score
  }
]


function compare( a, b ) {
  if ( a.score < b.score ){
    return -1;
  }
  if ( a.score > b.score ){
    return 1;
  }
  return 0;
}
var sortedScores = highScores.sort( compare ).reverse();

console.log(chalk.redBright.bgBlack("Your score is: "),chalk.greenBright(score),"\n")

if(score >= sortedScores[0].score ){
  console.log('Congratulations you have got the highest score \n');
}
console.log(chalk.blueBright.bgBlack("The Highscore list: \n" ))

for(j=0; j<sortedScores.length; j++){
  var thisScore = sortedScores[j];
  var newName = thisScore.name;
  var newScore = thisScore.score;
  console.log(chalk.greenBright.bgBlack(newName+":"),chalk.redBright(newScore))
}
