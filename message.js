function setup() {
  createCanvas(460, 850);
}

function draw() {
  background(244, 194, 194);
  
  //The quick brown fox jumps over the lazy dog
  T(10, 10);
  H(60, 10);
  E(110, 10);
  
  Q(210, 10);
  U(260, 10);
  I(310, 10);
  C(360, 10);
  K(410, 10);
  
  B(10, 110);
  R(60, 110);
  O(110, 110);
  W(160, 110);
  N(210, 110);
  
  F(310, 110);
  O(360, 110);
  X(410, 110);
  
  J(10, 210);
  U(60, 210);
  M(110, 210);
  P(160, 210);
  S(210, 210);

  O(10, 310);
  V(60, 310);
  E(110, 310);
  R(160, 310);
  
  T(260, 310);
  H(310, 310);
  E(360, 310);
  
  L(10, 410);
  A(60, 410);
  Z(110, 410);
  Y(160, 410);
  
  D(260, 410);
  O(310, 410);
  G(360, 410);
  
  /*
  hw1 cp2
  Stella Sun
  */
  H(10, 550);
  W(60, 550);
  TWO(110, 550);
  
  C(210, 550);
  P(260, 550);
  ONE(310, 550);
  
  S(10, 650);
  T(60, 650);
  E(110, 650);
  L(160, 650);
  L(210, 650);
  A(260, 650);
  
  S(10, 750);
  U(60, 750);
  N(110, 750);
  
}


//Alphabet

//A
function A(x, y) {
  line(x+20, y, x, y+90);
  line(x+20, y, x+40, y+90);
  line(x+10, y+45, x+30, y+45);
}

//B
function B(x, y) {
  noFill();
  rect(x, y, 40, 40, 0, 30, 30, 0);
  rect(x, y+40, 40, 50, 0, 80, 80, 0);
}

//C
function C(x, y) {
  arc(x+20, y+45, 40, 90, QUARTER_PI, PI+3/4*PI, OPEN);
}

//D
function D(x, y) {
  rect(x, y, 40, 90, 0, 50, 50, 0);
}

//E
function E(x, y) {
  line(x, y, x, y+90);
  line(x, y, x+40, y);
  line(x, y+45, x+40, y+45);
  line(x, y+90, x+40, y+90);
} 

//F
function F(x, y) {
  line(x, y, x, y+90);
  line(x, y, x+40, y);
  line(x, y+45, x+40, y+45);
} 

//G
function G(x, y) {
  arc(x+20, y+45, 40, 90, 0, PI+3/4*PI, OPEN);
  line(x+20, y+45, x+40, y+45)
}

//H
function H(x, y) {
  line(x, y, x, y+90);
  line(x+40, y, x+40, y+90);
  line(x, y+45, x+40, y+45);
}

//I
function I(x, y) {
  line(x+20, y, x+20, y+90);
  line(x, y, x+40, y);
  line(x, y+90, x+40, y+90);
} 

//J
function J(x, y) {
  line(x+20, y, x+20, y+80);
  line(x, y, x+40, y);
  arc(x+10, y+80, 20, 20, 0, PI, OPEN);
} 

//K
function K(x, y) {
  line(x, y, x, y+90);
  line(x, y+45, x+40, y);
  line(x, y+45, x+40, y+90);
} 

//L
function L(x, y) {
  line(x, y, x, y+90);
  line(x, y+90, x+40, y+90);
}

//M
function M(x, y) {
  line(x, y, x, y+90);
  line(x+40, y, x+40, y+90);
  line(x, y, x+20, y+45);
  line(x+40, y, x+20, y+45);
}

//N
function N(x, y) {
  line(x, y, x, y+90);
  line(x+40, y, x+40, y+90);
  line(x, y, x+40, y+90);
}

//O
function O(x, y) {
  noFill();
  rect(x, y, 40, 90, 30);
}

//P
function P(x, y) {
  noFill();
  rect(x, y, 40, 40, 0, 30, 30, 0);
  line(x, y+40, x, y+90);
}

//Q
function Q(x, y) {
  noFill();
  rect(x, y, 40, 90, 30);
  line(x+20, y+80, x+40, y+90);
}

//R
function R(x, y) {
  noFill();
  rect(x, y, 40, 40, 0, 30, 30, 0);
  line(x, y+40, x, y+90);
  line(x+20, y+40, x+40, y+90);
}

//S
function S(x, y) {
  arc(x+20, y+22.5, 40, 45, HALF_PI, 0, OPEN);
  arc(x+20, y+67.5, 40, 45, 1.5*PI, PI, OPEN);
}
  
//T
function T(x, y) {
  line(x+20, y, x+20, y+90);
  line(x, y, x+40, y);
} 
  
//U
function U(x, y) {
  line(x, y, x, y+70);
  line(x+40, y, x+40, y+70);
  arc(x+20, y+70, 40, 40, 0, PI, OPEN);
} 

//V
function V(x, y) {
  line(x, y, x+20, y+90);
  line(x+40, y, x+20, y+90);
}

//W
function W(x, y) {
  line(x, y, x+5, y+90);
  line(x+40, y, x+35, y+90);
  line(x+5, y+90, x+20, y+45);
  line(x+35, y+90, x+20, y+45);
}

//X
function X(x, y) {
  line(x, y, x+40, y+90);
  line(x+40, y, x, y+90);
}

//Y
function Y(x, y) {
  line(x, y, x+20, y+45);
  line(x+40, y, x+20, y+45);
  line(x+20, y+45, x+20, y+90);
}

//Z
function Z(x, y) {
  line(x+40, y, x, y+90);
  line(x, y, x+40, y);
  line(x, y+90, x+40, y+90);
}

//1
function ONE(x, y) {
  line(x+20, y, x+20, y+90);
  line(x, y+90, x+40, y+90);
  line(x, y+20, x+20, y);
}

//2
function TWO(x, y) {
  arc(x+20, y+22.5, 40, 45, PI, 1/4*PI, OPEN);
  line(x+34.5, y+38, x, y+90);
  line(x, y+90, x+40, y+90);
}

