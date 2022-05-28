var airhockeytable;
var greenmalletimg,greenmallet;
var redmalletimg,redmallet
var hockeypuckimg,hockeypuck
var inneredge1,inneredge2,inneredge3,inneredge4
var goal1,goal2

function preload(){
  airhockeytable = loadImage("images/air-hockey-table.jpg");
  greenmalletimg=loadImage("images/greenmallet.png")
  redmalletimg=loadImage("images/redmallet.jpg")
  hockeypuckimg = loadImage("images/hockeypuck.png")
}
function setup() {
  createCanvas(1000, 600);
  edges=createEdgeSprites();
  greenmallet=createSprite(300,300,20,20);
  greenmallet.addImage(greenmalletimg)
  greenmallet.scale=0.2


  redmallet = createSprite(750,300,20,20)
  redmallet.addImage(redmalletimg)
  redmallet.scale=0.2

  hockeypuck = createSprite(500,300,15,15)
  hockeypuck.addImage(hockeypuckimg)
  hockeypuck.scale=0.2

  var inneredge1 = createSprite(500,130,700,10);
  inneredge1.shapeColor="black"

  var inneredge2 = createSprite(500,470,700,10);
  inneredge2.shapeColor="black"

  var inneredge3 = createSprite(150,300,10,400);
  inneredge3.shapeColor="black"

  var inneredge4 = createSprite(850,300,10,400);
  inneredge4.shapeColor="black"

  var goal1 = createSprite(878,298,20,100);
  goal1.shapeColor="black";

  var goal2 = createSprite(140,298,20,100);
  goal2.shapeColor="black";

  inneredge1.visible=false
  inneredge2.visible=false
  inneredge3.visible=false
  inneredge4.visible=false
}

function draw() {
  background(airhockeytable);
  if (keyDown(UP_ARROW)) {
    greenmallet.y=greenmallet.y-2
  }

  if (keyDown(DOWN_ARROW)) {
    greenmallet.y=greenmallet.y+2
  }

  if (keyDown(LEFT_ARROW)) {
    greenmallet.x=greenmallet.x-2
  }

  if (keyDown(RIGHT_ARROW)) {
    greenmallet.x=greenmallet.x+2
  }

  createEdgeSprites();
  hockeypuck.bounceOff(inneredge1);
  hockeypuck.bounceOff(inneredge2);
  hockeypuck.bounceOff(inneredge3);
  hockeypuck.bounceOff(inneredge4);

  drawSprites();
}