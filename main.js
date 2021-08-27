const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
const messageJ1 = document.querySelector("#j1");
const messageJ2 = document.querySelector("#j2");
var joueurEncours = 1;
var finJeu = false;

var pointJ1 = 0;
var pointJ2 = 0;

var isIAON = false;

initialisationTableau();
// placeForTest(0);
// placeForTest(0);
// placeForTest(1);
// placeForTest(1);
// placeForTest(0);
// placeForTest(1);


function startIA(){
  isIAON = !isIAON;
}

function jouer(colonne){
   jouerCase(colonne);
   if(isIAON){
      colonneIA = IA.choixColonne();
      jouerCase(colonneIA);
   }
}

function placeForTest(colonne){
   jouer(colonne);
}


function jouerCase(colonne){
         if(!finJeu){
            var ligneVide = jeu.retournerLigneCaseVideColonne(colonne);
            if(ligneVide !== -1){
            jeu.jouerCase(joueurEncours,ligneVide,colonne);
            jeu.afficherPuissance4();
            if(jeu.verificationFinJeu(joueurEncours)){
               gererFinJeu();
            }
            if(joueurEncours === 1){
               joueurEncours = 2;
               tour.innerHTML = "Tour du Joueur 2";
            }else {
               joueurEncours = 1;
               tour.innerHTML = "Tour du Joueur 1";
            }
         }
   }

}
         
function initialisationTableau(){
   finJeu = false;
   joueurEncours = 1;
   alert.classList.add("d-none");
   var contentJ1 = "<img src='./images/j1.png' class='bg-danger rounded-circle' /><br />";
   contentJ1 += pointJ1;
   messageJ1.innerHTML = contentJ1;

   var contentJ2 = "<img src='./images/j2.png' class='bg-info rounded-circle' /><br />";
   contentJ2 += pointJ2;
   messageJ2.innerHTML = contentJ2;

   jeu.initialisation();
   jeu.afficherPuissance4();
}
function gererFinJeu(){
   finJeu = true;
   var contentAlert = "Partie Terminée, le gagnant est : " + joueurEncours + "<br />";
   contentAlert += '<button type="button" class="btn btn-secondary" onClick = initialisationTableau()>Recommencez</button>';
   alert.innerHTML = contentAlert;
   alert.classList.remove("d-none");
   if(joueurEncours ===1){
      pointJ1++;
   }else {
      pointJ2++;
   }
      
}








