var fishImage;
var fish1Image;
var fish3Image;
var horseImage;
var starImage;
var fishing_boatImage;
var hunterImage;
var netImage;
var oil_spillImage;
var spillImage;
var good_sea_with_fishesImage;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()

{
	//loading images
	good_sea_with_fishesImage = loadImage("images/good_sea_with_fishes.png");
	
	fishImage = loadImage("images/fish.png");
	
	
	fish1Image = loadImage("images/fish1.png");
	fish3Image = loadImage("images/fish3.png");
	horseImage = loadImage("images/horse.jpg");
	starImage = loadImage("images/star.jpg");


	fishing_boatImage = loadImage("images/fishing-boat.jpg");
	hunterImage = loadImage("images/hunter.jpg");
	netImage = loadImage("images/net.jpg");
	oil_spillImage = loadImage("images/oil-spill.jpg");
	spillImage = loadImage("images/spill.jpg");

}

function setup() {
	createCanvas(1700, 700);


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.

	good_sea_with_fishes = createSprite(1700,700,10,10 );
	//good_sea_with_fishes(1700,700);
	good_sea_with_fishes.addImage("good_sea_with_fishes", good_sea_with_fishesImage);
	//fish = createSprite();
	//fish()
	


	
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);


  
  drawSprites();
 
}






