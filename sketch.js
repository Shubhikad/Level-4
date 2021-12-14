var bg
var car, carL, carR, carF, carB;
var barrier1, RandNum;
var placeOrderSprite
var score = 0
function preload(){
  bg = loadImage("neighbourhood .jpg")

  carL = loadImage("car side.png")
  carR = loadImage("car side 2.png")
  carF = loadImage("car front.png")
  carB = loadImage("car back.png")

  oneImg = loadImage("1.png")
  twoImg = loadImage("2.png")
  threeImg = loadImage("3.png")
  fourImg = loadImage("4.png")
  fiveImg = loadImage("5.png")
  sixImg = loadImage("6.png")
  sevenImg = loadImage("7.png")
  eightImg = loadImage("8.png")
  nineImg = loadImage("9.png")














   

}
  
function setup(){
  createCanvas(800,800)
  car = createSprite(143,200,20,20)
  car.addImage(carR)
  car.scale = 0.08
  car.debug = true
  //car.setCollider("rectangle",0,0,620,620)

  barrier1 = createSprite(371,276,390,230)
  barrier1.visible = false
  
  barrier2 = createSprite(45,276,120,230)
  barrier2.visible = false

  barrier3 = createSprite(710,276,150,230)
  barrier3.visible = false

  barrier4 = createSprite(45,546,120,180)
  barrier4.visible = false

  barrier5 = createSprite(652,546,500,180)
  barrier5.visible = false

  barrier6 = createSprite(251,546,170,180)
  barrier6.visible = false

  barrier7 = createSprite(251,776,170,180)
  barrier7.visible = false

  barrier8 = createSprite(652,780,500,180)
  barrier8.visible = false

  barrier9 = createSprite(20,786,170,180)
  barrier9.visible = false


  barrier10 = createSprite(20,10,170,180)
  barrier10.visible = false
  
  barrier11 = createSprite(251,10,170,180)
  barrier11.visible = false
  
  barrier12 = createSprite(652,10,550,180)
  barrier12.visible = false
  
  oneS = createSprite(136,150,20,20)
  twoS = createSprite(363,140,20,20)
  sevenS= createSprite(136,670,20)
  fiveS = createSprite(363,420,20)
  sixS = createSprite(604,420,20)
  threeS = createSprite(604,150,20,20)
  fourS = createSprite(136,420,20)
  nineS = createSprite(604,670,20)
  eightS= createSprite(363,670,20)
  /*tenS = createSprite(485,470,20,20)
  elevenS = createSprite(460,380,20,20)
  twelveS = createSprite(0,20,20)
  thirteenS = createSprite(0,20,20)
  fourteenS = createSprite(0,20,20)
  fifteenS = createSprite(530,380,20,20)
  sixteenS = createSprite(460,20,20)
  seventeenS = createSprite(0,20,20)
  ninteenS = createSprite(0,20,20)*/

  oneS.addImage(oneImg)
  twoS.addImage(twoImg)
  threeS.addImage(threeImg)
  fourS.addImage(fourImg) 
  fiveS.addImage(fiveImg) 
  sixS.addImage(sixImg) 
  sevenS.addImage(sevenImg)
  eightS.addImage(eightImg)
  nineS.addImage(nineImg)
  /*elevenS.addImage(tenImg)
  twelveS.addImage(elevenImg)
  thirteenS.addImage(twelveImg)
  fourteenS.addImage(thirteenImg)
  fifteenS.addImage(fourteenImg) 
  sixteenS.addImage(fifteenImg) 
  seventeenS.addImage(sixteenImg)
  ninteenS.addImage(seventeenImg) */

  /*oneS.scale = 0.3
  twoS.scale = 0.3
  sixS.scale = 0.3*/
  oneS.scale = 0.5
  twoS.scale = 0.5
  threeS.scale = 0.5
  fourS.scale = 0.5
  fiveS.scale = 0.5
  sixS.scale = 0.5
  sevenS.scale = 0.5
  eightS.scale = 0.5
  nineS.scale = 0.5
 var score = 0
 var swipe
 /* for(i = 0; i <= 6; i++){
    deliveryOrder=Math.round(random(1,23))
  }
  
  if(deliveryHouse==deliveryOrder){
    
  }
  Text("Deliver to " + deliveryHouse, 20,20)
*/

placeOrderSprite =  createSprite(750,50,60,60)


}



function draw(){
  background(bg)
  textSize(40)
    fill("black")
  text("Deliver to lane: " + RandNum, 200,200)
  
  if(keyDown("right_arrow")){
    car.x = car.x + 5
    car.addImage(carL)
  }
  if(keyDown("left_arrow")){
    car.x = car.x - 5
    car.addImage(carR)
    
  }
  if(keyDown("up_arrow")){
    car.y = car.y - 5
    car.addImage(carB)
  }
  if(keyDown("down_arrow")){
    car.y = car.y + 5
    car.addImage(carF)
  }

  if(mousePressedOver(placeOrderSprite)){
    RandNum = Math.round(random(1,9))
    console.log(RandNum)
    
    
  }
  text("Score = " + score, 20,60)
switch(RandNum){
  case 0:
    break;
  case 1:
    text(40)

      if(car.isTouching(oneS)){
        score = score + 1
        RandNum = 0
      } 
      
        
    break;

    case 2:
      text(40)

      if(car.isTouching(twoS)){
        score = score+1
        RandNum = 0
      }   
    break;

    case 3:
      text(40)

      if(car.isTouching(threeS)){
        score = score+1
        RandNum = 0
      }   
    break;
    case 4:
      text(40)

      if(car.isTouching(fourS)){
        score = score+1
        RandNum = 0
      }   
    break;
    case 5:
      text(40)

      if(car.isTouching(fiveS)){
        score = score+1
        RandNum = 0
      }   
    break;
    case 6:
      text(40)
    
      if(car.isTouching(sixS)){
        score = score+1
        RandNum = 0
      }   
    break;

    case 7:
      text(40)
  
      if(car.isTouching(sevenS)){
        score = score+1
        RandNum = 0
      }   
    break;
    case 8:
      text(40)
    
      if(car.isTouching(eightS)){
        score = score+1
        RandNum = 0
      }   
    break;
    case 9:
      text(40)
    
      if(car.isTouching(nineS)){
        score = score+1
        RandNum = 0
      }   
    break;
  
}


  BounceFunc()
   drawSprites()
}
function BounceFunc(){
  if(car.isTouching(barrier1)){
    car.bounceOff(barrier1)
  }
  if(car.isTouching(barrier2)){
    car.bounceOff(barrier2)
  }
  if(car.isTouching(barrier3)){
    car.bounceOff(barrier3)
  }

  if(car.isTouching(barrier4)){
    car.bounceOff(barrier4)
  }
  if(car.isTouching(barrier5)){
    car.bounceOff(barrier5)
  }
  if(car.isTouching(barrier6)){
    car.bounceOff(barrier6)
  }
  if(car.isTouching(barrier7)){
    car.bounceOff(barrier7)
  }
  if(car.isTouching(barrier8)){
    car.bounceOff(barrier8)
  }
  if(car.isTouching(barrier9)){
    car.bounceOff(barrier9)
  }
  if(car.isTouching(barrier10)){
    car.bounceOff(barrier10)
  }
  if(car.isTouching(barrier11)){
    car.bounceOff(barrier11)
  }
  if(car.isTouching(barrier12)){
    car.bounceOff(barrier12)
  }

  
}