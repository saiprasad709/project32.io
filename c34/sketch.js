const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;
var ox1,ball,slingshot;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,3000,20);
    ox1= new box(1100,100,70,70);
    ox2= new box(1100,170,70,70);
    ox3= new box(1100,240,70,70);
    ox4= new box(1030,100,70,70);
    ox5= new box(1030,170,70,70);
    ox6= new box(1030,240,70,70);
    ox7= new box(1170,100,70,70);
    ox8= new box(1170,170,70,70);
    ox9= new box(1170,240,70,70);
    ox10= new box(1240,100,70,70);
    ox11= new box(1240,170,70,70);
    ox12= new box(1240,240,70,70);
    ox13=new box(1170,310,70,70);
    ox14=new box(1100,310,70,70);
    ball= new Ball(200,200,90,90);
    rope = new Rope(ball.body, { x: 800, y: 50 });
}
function draw(){
    background(255);
    
    Engine.update(engine);
    
    ground.display();
    ox1.display();
    ox2.display();
    ox3.display();
    ox4.display();
    ox5.display();
    ox6.display();
    ox7.display();
    ox8.display();
    ox9.display();
    ox10.display();
    ox11.display();
    ox12.display();
    ox13.display();
    ox14.display();
    ball.display();
    rope.display();    

}
function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
  function mouseReleased(){
    rope.velocityX=50;
}

//function keyPressed(){
//    if(keyCode === 32){
//        rope.attach(ball.body);
 //   }
//}