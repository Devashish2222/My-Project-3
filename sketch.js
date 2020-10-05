// Intiate gameStates
var START = 0;
var PLAY = 1;
var END = 2;
var gameState = START ;

var boy,boy_img,teacher_img,teacher;
var button1;
var interestinc,interestdec;
var Scene_img,Scene;

function preload()
{
  Scene_img = loadImage("School1.png");
  teacher_img = loadAnimation("Walk (1).png","Walk (2).png","Walk (3).png","Walk (4).png","Walk (5).png","Walk (6).png","Walk (7).png","Walk (8).png","Walk (9).png","Walk (10).png","Walk (11).png","Walk (12).png","Walk (13).png","Walk (14).png","Walk (15).png","Walk (16).png","Walk (17).png","Walk (18).png","Walk (19).png","Walk (20).png","Walk (21).png","Walk (22).png","Walk (23).png","Walk (24).png","Walk (25).png")
  boy_img = loadAnimation("boy running-0000.png","boy running-0001.png","boy running-0002.png","boy running-0003.png","boy running-0004.png","boy running-0005.png","boy running-0006.png","boy running-0007.png","boy running-0008.png","boy running-0009.png","boy running-0010.png","boy running-0011.png","boy running-0012.png","boy running-0013.png","boy running-0014.png","boy running-0015.png")
}

function setup()
{
 canvas = createCanvas(1000,500);

 Scene = createSprite(100,100,1000,500);
 Scene.addImage(Scene_img);
 Scene.scale = 1.5;
 Scene.velocityX = -2;

 boy = createSprite(300,300,5,5);
 boy.addAnimation("Running",boy_img);
 boy.scale = 0.4;
 boy.velocityX = 5;

 teacher = createSprite(100,100,5,5);
 teacher.addAnimation("walking",teacher_img);
 teacher.scale = 0.4;
 teacher.velocityX = 5;

 interestdec = createSprite(1000,250,10,10);
 interestdec.velocityX = -2;

}

function draw()
{
  background("Pink");

  if(gameState === START){
  fill("Green");
  textSize(25);
  text("Ms.Make Study who is the mentor of Charlie the student likes to teach but Charlie does ",10,100);

  fill("Green");
  textSize(25);
  text("not like to learn at all. So, Can you help Ms.Makestudy successful in helping",10,130);

  fill("Green");
  textSize(25);
  text("Charlie learn coding. Click on Help MakeStudy to help the teacher",10,160);

  //Text on the button
  fill("Orange");
  textSize(20);
  text("Help MakeStudy!",820,450);

  //Button for continuation
  button1 = createSprite(890,450,160,30);
  button1.shapeColor = "White";
  button1.visible = false;

  //Visibility and velocity of Boy
  boy.visible = false;
  boy.velocityX = 0;
  
  //Visiblity and velocity of teacher
  teacher.visible = false;
  teacher.velocityX = 0;  

  //Visibilty of Powerup
  interestdec.visible = false;
  interestdec.velocityX = 0;
  
  //Visibility of Background
  Scene.visible = false;
  Scene.velocityX = 0;


 if(mousePressedOver(button1))
 {
   gameState = PLAY;
 }

} else if(gameState === PLAY)
{
   background(Scene_img);

   boy.visible = true;  
   boy.velocityX = 3;

   teacher.visible = true;
   teacher.velocityX = 3;

   interestdec.visible = true;
   interestdec.velocityX = -4;

   Scene.addImage(Scene_img);
   Scene.visible = false;
   Scene.velocityX = -3;


  fill("Red");
  textSize(12);
  text("I don't want to learn\n CODING",boy.x,220);

  if(interestdec.collide(boy))
  {
    boy.x = boy.x-200;
    interestdec.destroy();
  }   
}
  drawSprites();
}