var dog,happyDog,database,foodS,foodStock;

function preload()
{
	image = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(image);
  database = firebase.database;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }
  drawSprites();
  
  textSize(20);
  fill(255,144,4);
  stroke(0);
  text("PRESS UP ARROW KEY TO FEED DRAGO MILK",10,10);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })

  
}