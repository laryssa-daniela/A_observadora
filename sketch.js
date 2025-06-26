function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("blue");
  fill("rgb(255,190,68)");

  //rosto
  ellipse(200, 200, 300, 370);
  fill("white");
  circle(150, 150, 60);
  circle(250, 150, 60);
  ellipse(200, 270, 180, 20);
  fill("yellow");
  triangle(198, 188, 220, 220, 170, 220);

  //pupilas
  fill("green");
  //circle(140,147,25);
  //circle(240, 147, 25);
  
  
  //movimento pupila
  olhoX= map(mouseX,0,400,132,162);
  olhoY= map(mouseY,0,400,132,162);
  
  //pupila esquerda
  circle(olhoX, olhoY, 20);
  
  //pupila direita
  circle(olhoX+100, olhoY, 20);
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
  
  //cabelo
  fill('black');
  circle(52,169,50);
  circle(61,132,50);
  circle(70,97,50);
  circle(90,64,50);
  circle(121,47,50);
  circle(158,30,50);
  circle(202,30,50);
  circle(238,30,50);
  circle(268,34,50);
  circle(296,58,50);
  circle(317,86,50);
  circle(330,116,50);
  circle(347,157,50);
  circle(367,119,50);
  circle(350,80,50);
  circle(374,147,40);
  circle(329,44,50);
  circle(297,19,50);
  circle(257,2,50);
  circle(212,0,50);
  circle(173,1,50);
  circle(124,4,50);
  circle(86,17,50);
  circle(56,50,50);
  circle(39,83,50);
  circle(35,119,50);
  circle(21,153,50);
  

   
  //sombrancelha
  line(130, 90, 170, 100);
  line(230, 100, 270, 90);

  //colar
  fill("pink");
  circle(133, 359, 20);
  circle(149, 368, 20);
  circle(166, 376, 20);
  circle(184, 382, 20);
  circle(206, 384, 26);
  circle(228, 382, 20);
  circle(246, 376, 20);
  circle(263, 368, 20);
  circle(279, 359, 20);

  //brincos
  circle(356, 209, 20);
  circle(46, 209, 20);

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
