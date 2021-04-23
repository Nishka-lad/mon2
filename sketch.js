var h1;
var h2;
var h3;
var score=0;
var l=3;
function setup(){
    createCanvas(1500,700);
    man=createSprite(1500/2, 650);
    h1=new Group();
    h2=new Group();
    h3=new Group();
    mo=new Group();
}

function draw(){
background(0);
edges=createEdgeSprites();
man.bounceOff(edges);
if (keyDown(LEFT_ARROW)){
man.x+=-20;
}
if (keyDown(RIGHT_ARROW)){
    man.x+=20;
    }
    hat1();
    hat2();
    hat3();
    if (h1.isTouching(man)){
        h1.destroyEach();
        score=score+1;
    }
    if (h2.isTouching(man)){
        h2.destroyEach();
        score=score+2;
    }
    if (h3.isTouching(man)){
        h3.destroyEach();
        score=score+3;
    }
    if (score>=2){
        monk();
    }
    if (mo.isTouching(h1)){
        h1.destroyEach();
        l=l-1;
    }
    if (mo.isTouching(h2)){
        h2.destroyEach();
        l=l-1;
    }
    if (mo.isTouching(h3)){
        h3.destroyEach();
        l=l-1;
    }
    textSize(30);
    text("Lives👉"+l,50,30);
    text("Score👉"+score,1300,30);
drawSprites();
}

function hat1(){
if (frameCount%100===0){
    h01=createSprite(Math.round(random(50,1250)),0);
    h01.velocityY=10;
    h01.lifetime=700;
    h1.add(h01);
}
}
function hat2(){
    if (frameCount%150===0){
        h02=createSprite(Math.round(random(30,1000)),0);
        h02.shapeColor="blue";
        h02.velocityY=13;
        h02.lifetime=700;
        h2.add(h02);
    }
}
function hat3(){
    if (frameCount%200===0){
        h03=createSprite(Math.round(random(20,1055)),0);
        h03.shapeColor="red";
        h03.velocityY=16;
        h03.lifetime=700;
        h3.add(h03);
    }
}
function monk(){
    if (frameCount%400===0){
        m=createSprite(0,650);
        m.shapeColor="brown";
        m.velocityX=5;
        m.lifetime=1550;
        mo.add(m);
    }
}