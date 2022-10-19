//declare and initialize a variable.
let myImage;

//for the importing images before function setup there should be 
//function preload for images that in this case the address of image
//file must be specified.
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
  
  //increment the value of interator variable.
  interator ++;
  let y = interator;
  let x = noise(interator/200) * width;
  ellipse(x, y, 10);
  

  


//each time when mouse is pressed the color of the line change from
//whith to black.
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

 //the scale of image
 image(myImage, 480, 80, 400, 450);

 
  
    pop();
}
