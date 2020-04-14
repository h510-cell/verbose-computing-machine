var canvas,backgroundImg;
var athelete,athelete1,athelete2,athelete3,athelete4;
var gameState=0;
var playerCount;
var allplayers;
var distance=0;
var database;

var form,player,game;

var track,athelete1_img,athelete2_img,athelete3_img,athelete4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  athelete1_img = loadImage("../images/athelete1.png");
  athelete2_img = loadImage("../images/athelete2.png");
  athelete3_img = loadImage("../images/athelete3.png");
  athelete4_img = loadImage("../images/athelete4.png");
  ground = loadImage("../images/ground.png");
}
function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===4){
    game.update(1);
  }
if (gameState===1){
  clear();
  game.play();
}
}