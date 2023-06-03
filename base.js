// On récupère le canevas et on définit un contexte de dessin
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// On charge l'image du personnage
var perso = new Image();
perso.src = "perso.jpg";

// On définit la position initiale
var x=canvas.width/2;
var y=canvas.height/2;

// Cette fonction modifie la position du personnage lorsque le joueur appuie sur une touche de direction
function gestionnaire(e){
  //console.log(e.key);
  if (e.key=="ArrowUp" && y>5){
    y=y-5;
  }
  else if (e.key=="ArrowDown" && y<canvas.height-65){
    y=y+5;
  }
  else if (e.key=="ArrowLeft" && x>5){
    x=x-5;
  }
  else if (e.key=="ArrowRight" && x<canvas.width-65){
    x=x+5;
  }
};

// La fonction addEventListener permet d'associer la fonction gestionnaire à l'événement "appui sur une touche"
document.addEventListener('keydown',gestionnaire);

function dessine(){
  //console.log("dessin");
  ctx.clearRect(0, 0, canvas.width, canvas.height);   //on efface le canevas
  ctx.drawImage(perso,x,y,60,60); // on dessine le personnage
};

// on lance la boucle de dessin
setInterval(dessine,10);
