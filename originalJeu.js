        //var toolbox = require("./toolbox.js");

        var jeu = {
            nbColonne : 5,
            nbLigne : 5,
            grille : [],

            nbCaseJ1 : 0,
            nbCaseJ2 : 0,

            initialisation : function(){
                this.grille = toolbox.initialiserTableauVide(this.nbLigne,this.nbColonne, 0);
                this.positionnerbateau(3,1);
                this.nbCaseJ1 += 3;
                this.positionnerbateau(2,1);
                this.nbCaseJ1 += 2;
                this.positionnerbateau(3,2);
                this.nbCaseJ2 += 3
                this.positionnerbateau(2,2);
                this.nbCaseJ2 += 2;
            },

            positionnerbateau : function(taille,joueur){
                // var bateau = {
                //     case1 :{
                //         x : null,
                //         Y : null
                //     },
                //     case2 : {
                //         x : null,
                //         Y : null
                //     },
                //     case3 : {
                //         x : null,
                //         Y : null
                //     },
                // };
                var bateau = {};
                var positionTermine = false
                while(!positionTermine){
                    var xAlea = Math.floor(Math.random() * (this.nbLigne-(taille-1)));
                    var yAlea = Math.floor(Math.random() * (this.nbColonne-(taille-1)));
                    var isHorizental = Math.random(Math.random() * 2);
                
                    var iscaseVide = true;
                for(var i =1; i <= taille && iscaseVide; i++){
                    bateau["case"+i] = this.getCaseCreationBateau(xAlea, yAlea, isHorizental, i);
                    iscaseVide = this.verifCaseVide(bateau,["case"+i]);

                }
                if(iscaseVide) positionTermine = true;
                }
                this.enregistrerGrille(bateau, joueur) ;
        },

        getCaseCreationBateau : function(xAlea,yAlea,isHorizental,numCase){
                var cellule = {};
                if(isHorizental){
                    cellule.x = xAlea + (numCase-1);
                    cellule.y = yAlea;
                }else {
                    cellule.x = xAlea; 
                    cellule.y = yAlea + (numCase-1);
                }
                return cellule;
        },

        verifCaseVide : function(caseB){
            if(this.grille[caseB.x][caseB.y] === 0) return true;
            return false;
        },

        enregistrerGrille : function(bateau,joueur){
                for(var cellule in bateau){
                    this.grille[bateau[cellule].x] [bateau[cellule].y] = joueur;
                }
        },




            afficherGrille : function(){
                for(var i =0; i < this.nbLigne; i++){
                    var txt = "";
                    for(var j = 0; j <this.nbColonne; j++){
                        txt += "| ";
                        if(this.grille[i][j]===0){
                            txt += "_";
                        } else if(this.grille[i][j]===1){
                            txt += "X";
                        }else if(this.grille[i][j]===2){
                            txt += "O";
                        }else if(this.grille[i][j]===3){
                            txt += "D";
                        }
                        txt += " |";
                    }
                    console.log(txt);
                    
                }
                
            },

            jouerCase : function(ligne,colonne){
                if(this.grille[ligne][colonne] ===1)this.nbCaseJ1--;
                if(this.grille[ligne][colonne] ===1)this.nbCaseJ2--;
                this.grille[ligne][colonne] = 3;
                if(this.nbCaseJ1 <= 0 || this.nbCaseJ2 <= 0) return true;
        },


}
//module.exports = jeu