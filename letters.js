function setup() {
  createCanvas(360, 410);
}

function draw() {
  background(244, 194, 194);
  
  A(10, 10);
  B(60, 10);
  C(110, 10);
  D(160, 10);
  E(210, 10);
  F(260, 10);
  G(310, 10);
  H(10, 110);
  I(60, 110);
  J(110, 110);
  K(160, 110);
  L(210, 110);
  M(260, 110);
  N(310, 110);
  O(10, 210);
  P(60, 210);
  Q(110, 210);
  R(160, 210);
  S(210, 210);
  T(260, 210);
  U(310, 210);
  V(10, 310);
  W(60, 310);
  X(110, 310);
  Y(160, 310);
  Z(210, 310);
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




