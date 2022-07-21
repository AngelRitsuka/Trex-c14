var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var cactos;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  //obstaculos/ cactos
  ob1 = loadImage("obstacle1.png");
  ob2 = loadImage("obstacle2.png");
  ob3 = loadImage("obstacle3.png");
  ob4 = loadImage("obstacle4.png");
  ob5 = loadImage("obstacle5.png");
  ob6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.adicionarAnimação("colidiu",trex_colidiu)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();

  criar_cactos();
  
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 134
    
    //ajustar a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function criar_cactos(){
      if(frameCount %60 ===0){
        cactos = createSprite(550,180,50,50);
        cactos.velocityX = -4;
        cactos.scale= 0.5;
        //lifetime (tempo de vida): tamanho da tela / velocidade
        cactos.lifetime = 150;
        //comando de trocas
        var rand = Math.round(random(1,6));
        switch (rand) {
          case 1: cactos.addImage(ob1);
          break;
          case 2: cactos.addImage(ob2);
          break;
          case 3: cactos.addImage(ob3);
          break;
          case 4: cactos.addImage(ob4);
          break;
          case 5: cactos.addImage(ob5);
          break;
          case 6: cactos.addImage(ob6);
            break;
          default: break;
        }
      }
}