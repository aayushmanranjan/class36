var gamestate = 0;
var playercount;
var database;
var form,game,player;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getstate();
  game.start();


}

function draw(){
  background("white");
  
}

