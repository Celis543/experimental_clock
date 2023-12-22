let hr;
let mn;
let sc;
let rs=360;
let cursor;
function preload() {
  cursor = loadImage("Mush.png");
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(0)
  colorMode(HSB);
}

function draw() {
  
  translate(200, 200);
  rotate(-90);
  strokeWeight(8);
  push()
  stroke(rs,100,100)
  noFill();
  arc(0, 0, 260, 260, 0, 360);
  pop()
  hr = hour();
  mn = minute();
  sc = second();
  let secondAngle = map(sc, 0, 60, 0, 360);
  

  let minuteAngle = map(mn, 0, 60, 0, 360);
  //arc(0, 0, 280, 280, 0, minuteAngle);

  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 260, 260, 0, hourAngle);
  
  push();
  strokeWeight(10);
  stroke(rs,100,100)
  rotate(secondAngle);
  //line(0, 0, 100, 0);
  pop();
push();
  noStroke();
  fill(rs,100,100);
  arc(0, 0, 300, 300, secondAngle-6, secondAngle,PIE);
  pop();

  push();
  rotate(minuteAngle);
  //line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  //line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  //cursor
  push();
  rotate(90);
//image(cursor, mouseX - width / 2, mouseY - height / 2, 40, 40);
  pop();
  rs=sc*6;
  console.log(rs)
  if(sc==0){
    //rs=360;
    push();
  stroke(0);
  arc(0, 0, 300, 300, 0, secondAngle);
  pop();
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 60);
  }
}