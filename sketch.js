function preload(){
  // put preload code here
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);// es un atributo para los angulos de circulo
  frameRate(35);// la rapidez con lo que se hace el círculo
  background(0);

}

function draw()
               {
if (frameCount<120){
  // fila 1
  push()
  strokeWeight(1);// el grosor de la línea
  stroke("white");
  width=100;
  height=100;
  r1=15
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=100;
  height=350;
  r2=55;
  line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);

  width=100;
  height=600;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);


  width=100;
  height=850;
  line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);


// fila 2


  width=400;
  height=0;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=400;
  height=250;
  r3=35;
  line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

  width=400;
  height=500;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=400;
  height=750;
  line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

  width=400;
  height=1000;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  //fila 3

  width=700;
  height=100;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=700;
  height=350;
  line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);

  width=700;
  height=600;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=700;
  height=850;
  line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);

  // fila 4

  width=1000;
  height=0;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=1000;
  height=250;
  line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

  width=1000;
  height=500;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

  width=1000;
  height=750;
  line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

  width=300;
  height=1000;
  line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);
  pop();

}
if (frameCount==120){
background("white");}

if (frameCount<365){
  push();
  strokeWeight(1);// el grosor de la línea
  stroke(
         lerpColor(color("white"),color("black"),frameCount/360)
               );
  width=600;
  height=450;
  r4=900;
  line(width-r4, height, width+cos(frameCount*3)*r4,height+sin(frameCount*3)*r4);
  pop();

  push();
  strokeWeight(1);// el grosor de la línea
  stroke(
         lerpColor(color("white"),color("black"),frameCount/360)
               );
  width=600;
  height=450;
  r4=900;
  line(width+r4, height, width+cos(frameCount*3)*r4,height+sin(frameCount*3)*r4);
  pop();

}

  if (frameCount==240){
  background("white")}

  if (frameCount>240){
    // fila 1
    strokeWeight(1);// el grosor de la línea
    stroke("black");
    width=100;
    height=100;
    r1=15
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=100;
    height=350;
    r2=55;
    line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);

    width=100;
    height=600;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);


    width=100;
    height=850;
    line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);


  // fila 2


    width=400;
    height=0;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=400;
    height=250;
    r3=35;
    line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

    width=400;
    height=500;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=400;
    height=750;
    line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

    width=400;
    height=1000;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    //fila 3

    width=700;
    height=100;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=700;
    height=350;
    line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);

    width=700;
    height=600;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=700;
    height=850;
    line(width+r2, height, width+cos(frameCount*3)*r2,height+sin(frameCount*3)*r2);

    // fila 4

    width=1000;
    height=0;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=1000;
    height=250;
    line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

    width=1000;
    height=500;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);

    width=1000;
    height=750;
    line(width+r3, height, width+cos(frameCount*3)*r3,height+sin(frameCount*3)*r3);

    width=300;
    height=1000;
    line(width+r1, height, width+cos(frameCount*3)*r1,height+sin(frameCount*3)*r1);
}
if(frameCount==365){
noloop()
}
}
