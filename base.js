// On récupère le canevas et on définit un contexte de dessin
var canvas = document.getElementById("canvas");
var ctx = c.getContext("2d");

// On charge l'image du personnage
var perso = new Image();
perso.src = "perso.jpg";

// On définit la position initiale
var x=canvas.width/2;
var y=canvas.width/2;

// Cette fonction modifie la position du personnage lorsque le joueur appuie sur une touche de direction
function gestionnaire(e){
  if (e.key=="ArrowUp" && y>10){
    y=y-10;
  }
  else if e.key=="ArrowDown" && y<canvas.height-10){
    y=y+10;
  }
  else if e.key=="ArrowLeft" && x>10){
    x=x-10;
  }
  else if e.key=="ArrowRight" && x<canvas.width-10){
    x=x+10;
  }
};

// La fonction addEventListener permet d'associer la fonction gestionnaire à l'événement "appui sur une touche"
document.addEventListener('keydown',gestionnaire);

function dessine(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);   //on efface le canevas
  ctx.drawImage(perso,x,y,30,30); // on dessine le personnage
};

// on lance la boucle de dessin
setInterval(dessine,10);
