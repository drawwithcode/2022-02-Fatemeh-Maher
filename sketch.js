
let myImage;


function preload() {
 myImage = loadImage("./assets/tree.png");
}

function setup() {
  createCanvas(1366, 643);
  background(255);
 
  ellipseMode(CENTER);
    
}



  
var interator = 0;


function draw() {
  push();
  
  interator ++;
  let y = interator;
  let x = noise(interator/200) * width;
  ellipse(x, y, 10);
  

  



  if (mouseIsPressed == true) {

    stroke(0);
  } 
    else {
    stroke(255);
  }
  for(let x = 0; x < 1366; x += 10)
  {
    strokeWeight(3);
    line(x, 0, x + 0, 643)
  }


 
  if (mouseIsPressed == true) {

    stroke(255);
  } 
    else {
    stroke(0);
  }
  for(let y = 0; y < 1690; y += 10)
  {
    strokeWeight(3);
    line(0, y, 0 + y, 400)
  }



  if (mouseIsPressed == true) {

    stroke(0);
  } 
    else {
    stroke(255);
  }
  for(let y = 90; y < 900; y += 8)
  {
    strokeWeight(3);
    line(660, 60, 220 + y, 400)
  }

  
  

noStroke();
fill(255);


  ellipse(680, 300, 400);

 
 image(myImage, 480, 80, 400, 450);

 
  
    pop();
}
