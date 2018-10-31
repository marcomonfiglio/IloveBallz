var listOfColors;//different possible colors
var Bground;//randomized to select type of Background
var stripe;//randomized to select stripe number
var Color1;//different order of colors
var Color2;//above
var Color3;//above
var decal//randomized to seleect decal
var functions //[CIRCLE(),STAR(),BOX(),TRIANGLE(),NOTHING()]//determines which decal

function setup() {//sets up array of flags and the list of colors used; offset array
  createCanvas(3000, 2000);
  background(62, 102, 214);
listOfColors = [color('#ff0000'), color('#0000ff'), color('#31a552'), color('#ffe926'), color('#ffffff')];
specialColor = [color('#ff9e38')];
specialColor2 = [color('#c3b5ff')];
  for (var row = 0; row <= 9; row++) {
    push();
    if(row % 2 == 0) {
      for (var col = 1; col <= 10; col++) {
          BGROUND();
          DECAL();
          translate(300,0);
        }
  }else{//creates offset
    push()
      for (var col = 1; col <= 9; col++){
        translate(150,0);
        BGROUND();
        DECAL();
        translate(150,0);
      }
    }
pop(); //restore state of canvas before the x translations
translate(0, 200); //translate in Y (down-up)
  }
}

function BGROUND() {//selects Background for each flag
  Bground= [int(random(0,4))];
  Color1=listOfColors[int(random(0, listOfColors.length))];//below is the color separator
  Color2=listOfColors[int(random(0, listOfColors.length))];
  Color3=listOfColors[int(random(0, listOfColors.length))];
    if(Color1==Color2){
       Color2=specialColor[int(random(0,specialColor.length))];;
    }
    if (Color3==Color2){
      Color3=specialColor2[int(random(0,specialColor.length))];;
    }
    if(Color1==Color3){
      Color3=specialColor2[int(random(0,specialColor.length))];;
    }
    if(Bground==0) {//solid background
      noStroke();
      fill(listOfColors[int(random(0,3))]);
      rect(50,50,210,120)
    }
    else if(Bground==1){//vertical stripes
      var stripe=[int(random(2,5))];
          if(stripe==3){//three stripes
            noStroke();
            fill(Color1);
            rect(50,50,70,120);
            noStroke();
            fill(Color2);
            rect(120,50,70,120);
            noStroke();
            fill(Color3);
            rect(190,50,70,120);
            }
         else if(stripe==2){//two stripes
           noStroke();
           fill(Color1);
           rect(50,50,105,120);
           noStroke();
           fill(Color2);
           rect(155,50,105,120);
         }
         else if(stripe==4){//four stripes
           noStroke();
           fill(Color1);
           rect(50,50,210/4,120);
           noStroke();
           fill(Color2);
           rect(50+210/4,50,210/4,120);
           noStroke();
           fill(Color3);
           rect(100+210/4,50,210/4,120);
           noStroke();
           fill(Color1);
           rect(150+210/4,50,210/4,120);
        }
        else {
          print(stripe);
        }
      }
    else if(Bground==2){//horizontal stripes
      var stripe=[int(random(2,5))];//chooses a stripe number
      if(stripe==3){//three stripes
        noStroke();
        fill(Color1);
        rect(50,50,210,40);
        noStroke();
        fill(Color2);
        rect(50,90,210,40);
        noStroke();
        fill(Color1);
        rect(50,130,210,40);
        }
     else if(stripe==2){//two stripes
       noStroke();
       fill(Color1);
       rect(50,50,210,60);
       noStroke();
       fill(Color2);
       rect(50,110,210,60);
     }
     else if(stripe==4){//four stripes
       noStroke();
       fill(Color1);
       rect(50,50,210,30);
       noStroke();
       fill(Color2);
       rect(50,80,210,30);
       noStroke();
       fill(Color1);
       rect(50,110,210,30);
       noStroke();
       fill(Color2);
       rect(50,140,210,30);
       }
    }
    else if(Bground=3){//cross stripe
      let cross= [int(random(1,3))];//two different types of crosses
      if(cross==2){//offcentered cross
        noStroke();
        fill(Color1);
        rect(50,50,210,120)
        noStroke();
        fill(Color2);
        rect(90,50,30,120)
        fill(Color2);
        rect(50,90,210,30)
      }
    else if(cross==1){//centered cross
      noStroke();
      fill(Color1);
      rect(50,50,210,120)
      noStroke();
      fill(Color2);
      rect(140,50,30,120)
      fill(Color2);
      rect(50,95,210,30)
      }
    }
    else{
      print(Bground);
    }
}
function DECAL() {
  if(Bground==0){//if Background is solid, only star and circle decal
    functions=[int(random(0,2))];//chooses a decal
    print("Decal functions= "+functions);
     if(functions==0){//Star decal
       push()
       translate(185,81)
       rotate(PI/3.25)
       fill(0,0,0)
       STAR(10,40,8,20,5);
       pop()
     }
     else if(functions==1){//circle decal
       CIRCLE();
     }
  }
  else if(Bground==1){//if vertical stripes then depending on stripe count, star, circle, or nothing
    if(stripe<=3){
      functions=[int(random(0,2))];//chooses a decal
      if(functions==0){//star decal
        push()
        translate(185,81)
        rotate(PI/3.25)
        fill(0,0,0);
        STAR(10,40,8,20,5);
        pop()
       }
    }
    else if(functions==1){//circle decal
      CIRCLE();
    }
  }
    else if(stripe==4){
      NOTHING();
    }
  else if(Bground==2){//if horizontal stripes, then box triangle or nothing
      functions=[int(random(2,5))]
      if(functions==2){//box correctDecal
        BOX();
      }
      else if(functions==3){//triangle decal
        TRIANGLE();
      }
      else if(functions==4){
      NOTHING();
    }
  }
  else if(Bground==3){
    NOTHING();
    }
  }
function CIRCLE(){//circle function
  fill(Color1)
  ellipse(155,110,50,50)
}
function BOX(){//box function
  fill(Color3);
  rect(50,50,90,60)
}
function TRIANGLE(){//triangle function
  fill(Color3)
  triangle(50, 50, 50, 170,150,110);
}
function STAR(x, y, radius1, radius2, npoints) {//taken from p5.js code)//star function
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

  function NOTHING(){
    console.log("nothing")
}
