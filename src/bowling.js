"use strict"

function BowlingGame() {
  this.score = 0
  this.frames = []
}


BowlingGame.prototype.roll = function (pins){
  this.frames.push(pins);
};


BowlingGame.prototype.calculateScore = function (){
  var totalScore = 0;
  var rollIndex = 0;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.frames[rollIndex] === 10) {
      totalScore += this.frames[rollIndex] + this.frames[rollIndex + 1] + this.frames[rollIndex + 2];
      rollIndex += 1;
    } else if (this.frames[rollIndex] + this.frames[rollIndex+1] === 10) {
      // totalScore += this.frames[rollIndex] + this.frames[rollIndex + 1] + this.frames[rollIndex + 2];
      totalScore += (10 + this.frames[rollIndex + 2]) ;
      rollIndex += 2;
    } else {
    totalScore += this.frames[rollIndex] + this.frames[rollIndex+1];
    rollIndex += 2;
  }

  }
  this.score = totalScore
  return totalScore



}

BowlingGame.prototype.resetGame = function() {
  this.score = 0;
  this.frames = []
};

// private for testing (helper)

BowlingGame.prototype.generateFrames = function(pins, rolls) {
  var count;
  for(count = 0; count < rolls; count++) {
    game.roll(pins)
  }

};
