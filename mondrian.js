  var xr;
  var yr;
  var wr;
  var hr;

  var xb;
  var yb;
  var wb;
  var hb;

  var xy;
  var yy;
  var wy;
  var hy;

  var xw;
  var yw;
  var ww;
  var hw;



function setup() {

  createCanvas(400, 400);
  
  xr = random(0, 380);
  yr = random(0, 380);
  wr = random(100, 400);
  hr = random(100, 400);
  
  xb = random(0, 380);
  yb = random(0, 380);
  wb = random(100, 400);
  hb = random(100, 400);
  
  xy = random(0, 380);
  yy = random(0, 380);
  wy = random(100, 400);
  hy = random(100, 400);
  
  xw = random(0, 380);
  yw = random(0, 380);
  ww = random(100, 400);
  hw = random(100, 400);
  

}

function draw() {
  
  
  background(255);
  stroke(0);
  strokeWeight(9);
  strokeCap(SQUARE);
  
  
  fill(221, 1, 0);
  rect(xr, yr, wr, hr); //red
  
  
  fill(34, 80, 149);
  rect(xb, yb, wb, hb); //blue
 
  
  fill(250, 201, 1);
  rect(xy, yy, wy, hy); //yellow

  fill(255);
  rect(xw, yw, ww, hw); //white
  
    if (mouseIsPressed) {
    refresh();
  }
}

function refresh() {
  xr = random(0, 380);
  yr = random(0, 380);
  wr = random(100, 400);
  hr = random(100, 400);
  
  xb = random(0, 380);
  yb = random(0, 380);
  wb = random(100, 400);
  hb = random(100, 400);
  
  xy = random(0, 380);
  yy = random(0, 380);
  wy = random(100, 400);
  hy = random(100, 400);
  
  xw = random(0, 380);
  yw = random(0, 380);
  ww = random(100, 400);
  hw = random(100, 400);
}
