// variables and objects and functions created for this

function preload() {
  img = loadImage('hit me hard and soft.jpeg');
  song = createAudio("Billie_Eilish_-_BIRDS_OF_A_FEATHER.mp3");
  wrong = createAudio("wronganswer.mp3");
}

let note1 = {
  color: "white",
  note1Diameter: 100,
  display: function () {
    fill(this.color);
    noStroke();
    circle(this.note1X, this.note1Y, this.note1Diameter);
  },
  note1X: 100,
  note1Y: -560,
  note1Descent: 4,
  started: false,
  start: function () {
    this.started = true;
  },
  moveY: function () {
    this.note1Y += this.note1Descent;
  },
};

let note2 = {
  color: "white",
  note2Diameter: 100,
  display: function () {
    fill(this.color);
    noStroke();
    circle(this.note2X, this.note2Y, this.note2Diameter);
  },
  note2X: 300,
  note2Y: -625,
  note2Descent: 4,
  started: false,
  start: function () {
    this.started = true;
  },
  moveY: function () {
    this.note2Y += this.note2Descent;
  },
};

let noteHit;
let combo = 0;
let wrongDuration = 1500;

//instructions

function setup() {
  createCanvas(800, 500);
  background(10,150,200);
}

function draw() {
  //canvas display
  image(img,0,0,800,500);
  stroke('aqua');
  strokeWeight (3);
  line(0,450,800,450);
  
  //note falls
  note1.display();
  if (note1.started == true) {
    note1.moveY();
  }
  if (note1.note1Y > 600) {
    note1.note1Y = 0;
  }
  note2.display();
  if (note2.started == true) {
    note2.moveY();
  }
  if (note1.note1Y > 600) {
    note1.note1Y = 0;
  }
  if (note2.note2Y > 600) {
    note2.note2Y = 0;
  }
  //display combo tally at the top right
  text("combo score " + combo, 650, 50);
}

//to start game

function keyPressed() {
  if (keyCode == 13){
    background(10,150,200);
    image(img,0,0,800,500);
    song.play();
    note1.start();
    note2.start();
    millis();
}

//insert gameplay here?? i need to have the notes fall to be hit at specific times with the beat and across four lanes

//note counted? yes/no + combo tally

if (keyCode == 65 && note1.note1Y < 425) {
//if (keyCode == 65 && millis() < 3600) {
  noteHit = false;
  wrong.play();
  combo = 0;
} else if (keyCode == 65 && /*3600 < millis() < 4100*/ note1.note1Y > 425) {
  noteHit =true;
  combo = combo + 1;
}
if (keyCode == 83 && note2.note2Y < 425) {
  //if (keyCode == 83 && millis() < 3600) {
    noteHit = false;
    wrong.play();
    combo = 0;
  } else if (keyCode == 83 && /*3600 < millis() < 4100*/ note2.note2Y > 425) {
    noteHit =true;
    combo = combo + 1;
  }}

// if (keyCode == 65 && /*timeelapsed range*/) {

// } else if (){

// }

//win-lose display

/*if (noteCounted > 75%) {
  text("musical maestro!", 400, 250);
} else {
  text("better luck next time, rookie!", 400, 250);
} */