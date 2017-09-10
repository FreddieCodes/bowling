"use strict"

function BowlingGame() {
  this.score = 0
  this.frames = []
}

Array.prototype.last = function() {
    return this[this.length-1];
}
// generates frames for tests
BowlingGame.prototype.generateFrames = function(roll1, roll2) {
  var count;
  for(count = 0; count < 10; count++) {
    this.frames.push([roll1, roll2])
    console.log("frame " + (count + 1) + ": " + roll1 + " , " + roll2)
  };
  this.score = (roll1 + roll2) * count;
};

// // function below sums up indiviual frames
// var frame = frames[0].reduce(function (a, b) {
// return a + b;
// }, 0);
//  frame + frames[0+1][0]

// make a total function to calculate individual


// calculates the total score
BowlingGame.prototype.calculateScore = function() {
  // if (frames[0])
  var flattened = [].concat.apply([], this.frames);
  console.log(flattened);
  var totalScore = flattened.reduce(function (a, b) {
  return a + b;
}, 0);
this.score = totalScore;
return totalScore;
};


// Spares
//  If a spare is rolled the score of the first roll in the next frame gets added to the score for the previous frame
//  spare frame: [9,1] = 10  next frame : [5,2] = 7 .  total = 17  first frame = 10 + 5 (next frame [0])
//  spare frame = 15  next frame = 7   total = 22

// maybe split it into 2 functions bowl1 and bowl2
BowlingGame.prototype.bowl = function(roll) {
  if (this.frames.length < 10 && this.frames[this.frames.length - 1][0] === true) {
    this.frames.push([roll, null])
  } else if (this.frames.last()[1]==null){
    this.frames.last()[1] = roll
  }
};
// Rolando's
// function standardScore(){
// 		return frame.turns[turnNumber] + frame.turns[turnNumber + 1];
// 	} // <--- It calculates the number of pins of the first 2 turns. ~
//
//
// 	for (var frameNum = 0; frameNum < 10; frameNum++) {
//
// 		if (spare()) {
// 			result += spareScore();
// 			turnNumber += 2;
// 		}
// 		else if (strike()) {
// 			result += strikeScore();
// 			turnNumber += 1;
// 		} else {
// 			result += standardScore();
// 			turnNumber += 2;
// 		}
// 	};
// 	return result; // <--- Calculation of the score. ~
// };
