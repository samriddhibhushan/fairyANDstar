var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg, fairy,fairybody;
var music;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg=loadAnimation("fairyImage1.png","fairyImage2.png");
    music=loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	music.play();

	//create fairy sprite and add animation for fairy
	fairy=createSprite(200,500,10,10);
	fairy.addAnimation("flying",fairyImg);
	fairy.scale=0.3;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	
	fairybody = Bodies.rectangle(200 , 500 , 50 ,100, {restitution:0.5, isStatic:true });
	World.add(world, fairy);
	
	Engine.run(engine);
    

}


function draw() {
  background(bgImg);
 // music.play();
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if (star.y>500 && starBody.position.y>500){
	  Matter.Body.setStatic(starBody,true);
	  
  }
  
  Engine.update(engine);

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode=== LEFT_ARROW){
		fairy.x = fairy.x - 15;
	}
	if (keyCode=== RIGHT_ARROW){
		fairy.x = fairy.x + 15;
	}
	
}
