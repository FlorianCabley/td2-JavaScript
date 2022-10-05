function estValide(bouton) {
    //efface tout le contenu dans les boutons au redémarrage de la partie
      return bouton.innerHTML.length === 0;
    }
    //affiche X ou O dans les boutons
    function setSymbol(btn, symbole) {
      btn.innerHTML = symbole;
    }
    //Fonction permettant de savoir si les 3 boutons on le même symbôle que le joueur
    function rechercherVainqueur(cases, joueurs, tour) {
      if (
        cases[0].innerHTML === joueurs[tour] &&
        cases[1].innerHTML === joueurs[tour] &&
        cases[2].innerHTML === joueurs[tour] &&
        cases[3].innerHTML === joueurs[tour] &&
        cases[4].innerHTML === joueurs[tour] &&
        cases[5].innerHTML === joueurs[tour] &&
        cases[6].innerHTML === joueurs[tour] &&
        cases[7].innerHTML === joueurs[tour] 
      ) {
        cases[0].style.backgroundColor = "#9ACD32";
        cases[1].style.backgroundColor = "#9ACD32";
        cases[2].style.backgroundColor = "#9ACD32";
        cases[3].style.backgroundColor = "#9ACD32";
        cases[4].style.backgroundColor = "#9ACD32";
        cases[5].style.backgroundColor = "#9ACD32";
        cases[6].style.backgroundColor = "#9ACD32";
        cases[7].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[8].innerHTML === joueurs[tour] &&
        cases[9].innerHTML === joueurs[tour] &&
        cases[10].innerHTML === joueurs[tour] &&
        cases[11].innerHTML === joueurs[tour] &&
        cases[12].innerHTML === joueurs[tour] &&
        cases[13].innerHTML === joueurs[tour] &&
        cases[14].innerHTML === joueurs[tour] &&
        cases[15].innerHTML === joueurs[tour] 
      ) {
        cases[8].style.backgroundColor = "#9ACD32";
        cases[9].style.backgroundColor = "#9ACD32";
        cases[10].style.backgroundColor = "#9ACD32";
        cases[11].style.backgroundColor = "#9ACD32";
        cases[12].style.backgroundColor = "#9ACD32";
        cases[13].style.backgroundColor = "#9ACD32";
        cases[14].style.backgroundColor = "#9ACD32";
        cases[15].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[16].innerHTML === joueurs[tour] &&
        cases[17].innerHTML === joueurs[tour] &&
        cases[18].innerHTML === joueurs[tour] &&
        cases[19].innerHTML === joueurs[tour] &&
        cases[20].innerHTML === joueurs[tour] &&
        cases[21].innerHTML === joueurs[tour] &&
        cases[22].innerHTML === joueurs[tour] &&
        cases[23].innerHTML === joueurs[tour] 
      ) {
        cases[16].style.backgroundColor = "#9ACD32";
        cases[17].style.backgroundColor = "#9ACD32";
        cases[18].style.backgroundColor = "#9ACD32";
        cases[19].style.backgroundColor = "#9ACD32";
        cases[20].style.backgroundColor = "#9ACD32";
        cases[21].style.backgroundColor = "#9ACD32";
        cases[22].style.backgroundColor = "#9ACD32";
        cases[23].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[24].innerHTML === joueurs[tour] &&
        cases[25].innerHTML === joueurs[tour] &&
        cases[26].innerHTML === joueurs[tour] &&
        cases[27].innerHTML === joueurs[tour] &&
        cases[28].innerHTML === joueurs[tour] &&
        cases[29].innerHTML === joueurs[tour] &&
        cases[30].innerHTML === joueurs[tour] &&
        cases[31].innerHTML === joueurs[tour] 
      ) {
        cases[24].style.backgroundColor = "#9ACD32";
        cases[25].style.backgroundColor = "#9ACD32";
        cases[26].style.backgroundColor = "#9ACD32";
        cases[27].style.backgroundColor = "#9ACD32";
        cases[28].style.backgroundColor = "#9ACD32";
        cases[29].style.backgroundColor = "#9ACD32";
        cases[30].style.backgroundColor = "#9ACD32";
        cases[31].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[32].innerHTML === joueurs[tour] &&
        cases[33].innerHTML === joueurs[tour] &&
        cases[34].innerHTML === joueurs[tour] &&
        cases[35].innerHTML === joueurs[tour] &&
        cases[36].innerHTML === joueurs[tour] &&
        cases[37].innerHTML === joueurs[tour] &&
        cases[38].innerHTML === joueurs[tour] &&
        cases[39].innerHTML === joueurs[tour] 
      ) {
        cases[32].style.backgroundColor = "#9ACD32";
        cases[33].style.backgroundColor = "#9ACD32";
        cases[34].style.backgroundColor = "#9ACD32";
        cases[35].style.backgroundColor = "#9ACD32";
        cases[36].style.backgroundColor = "#9ACD32";
        cases[37].style.backgroundColor = "#9ACD32";
        cases[37].style.backgroundColor = "#9ACD32";
        cases[39].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[40].innerHTML === joueurs[tour] &&
        cases[41].innerHTML === joueurs[tour] &&
        cases[42].innerHTML === joueurs[tour] &&
        cases[43].innerHTML === joueurs[tour] &&
        cases[44].innerHTML === joueurs[tour] &&
        cases[45].innerHTML === joueurs[tour] &&
        cases[46].innerHTML === joueurs[tour] &&
        cases[47].innerHTML === joueurs[tour] 
      ) {
        cases[40].style.backgroundColor = "#9ACD32";
        cases[41].style.backgroundColor = "#9ACD32";
        cases[42].style.backgroundColor = "#9ACD32";
        cases[43].style.backgroundColor = "#9ACD32";
        cases[44].style.backgroundColor = "#9ACD32";
        cases[45].style.backgroundColor = "#9ACD32";
        cases[46].style.backgroundColor = "#9ACD32";
        cases[47].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[48].innerHTML === joueurs[tour] &&
        cases[49].innerHTML === joueurs[tour] &&
        cases[50].innerHTML === joueurs[tour] &&
        cases[51].innerHTML === joueurs[tour] &&
        cases[52].innerHTML === joueurs[tour] &&
        cases[53].innerHTML === joueurs[tour] &&
        cases[54].innerHTML === joueurs[tour] &&
        cases[55].innerHTML === joueurs[tour] 
      ) {
        cases[48].style.backgroundColor = "#9ACD32";
        cases[49].style.backgroundColor = "#9ACD32";
        cases[50].style.backgroundColor = "#9ACD32";
        cases[51].style.backgroundColor = "#9ACD32";
        cases[52].style.backgroundColor = "#9ACD32";
        cases[53].style.backgroundColor = "#9ACD32";
        cases[54].style.backgroundColor = "#9ACD32";
        cases[55].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[56].innerHTML === joueurs[tour] &&
        cases[57].innerHTML === joueurs[tour] &&
        cases[58].innerHTML === joueurs[tour] &&
        cases[59].innerHTML === joueurs[tour] &&
        cases[60].innerHTML === joueurs[tour] &&
        cases[61].innerHTML === joueurs[tour] &&
        cases[62].innerHTML === joueurs[tour] &&
        cases[63].innerHTML === joueurs[tour] 
      ) {
        cases[56].style.backgroundColor = "#9ACD32";
        cases[57].style.backgroundColor = "#9ACD32";
        cases[58].style.backgroundColor = "#9ACD32";
        cases[59].style.backgroundColor = "#9ACD32";
        cases[60].style.backgroundColor = "#9ACD32";
        cases[61].style.backgroundColor = "#9ACD32";
        cases[62].style.backgroundColor = "#9ACD32";
        cases[63].style.backgroundColor = "#9ACD32";
        return true;
      }

      if (
        cases[0].innerHTML === joueurs[tour] &&
        cases[8].innerHTML === joueurs[tour] &&
        cases[16].innerHTML === joueurs[tour] &&
        cases[24].innerHTML === joueurs[tour] &&
        cases[32].innerHTML === joueurs[tour] &&
        cases[40].innerHTML === joueurs[tour] &&
        cases[48].innerHTML === joueurs[tour] &&
        cases[56].innerHTML === joueurs[tour] 
      ) {
        cases[0].style.backgroundColor = "#9ACD32";
        cases[8].style.backgroundColor = "#9ACD32";
        cases[16].style.backgroundColor = "#9ACD32";
        cases[24].style.backgroundColor = "#9ACD32";
        cases[32].style.backgroundColor = "#9ACD32";
        cases[40].style.backgroundColor = "#9ACD32";
        cases[48].style.backgroundColor = "#9ACD32";
        cases[56].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[1].innerHTML === joueurs[tour] &&
        cases[9].innerHTML === joueurs[tour] &&
        cases[17].innerHTML === joueurs[tour] &&
        cases[25].innerHTML === joueurs[tour] &&
        cases[33].innerHTML === joueurs[tour] &&
        cases[41].innerHTML === joueurs[tour] &&
        cases[49].innerHTML === joueurs[tour] &&
        cases[57].innerHTML === joueurs[tour] 
      ) {
        cases[1].style.backgroundColor = "#9ACD32";
        cases[9].style.backgroundColor = "#9ACD32";
        cases[17].style.backgroundColor = "#9ACD32";
        cases[25].style.backgroundColor = "#9ACD32";
        cases[33].style.backgroundColor = "#9ACD32";
        cases[41].style.backgroundColor = "#9ACD32";
        cases[49].style.backgroundColor = "#9ACD32";
        cases[57].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[2].innerHTML === joueurs[tour] &&
        cases[10].innerHTML === joueurs[tour] &&
        cases[18].innerHTML === joueurs[tour] &&
        cases[26].innerHTML === joueurs[tour] &&
        cases[34].innerHTML === joueurs[tour] &&
        cases[42].innerHTML === joueurs[tour] &&
        cases[50].innerHTML === joueurs[tour] &&
        cases[58].innerHTML === joueurs[tour] 
      ) {
        cases[2].style.backgroundColor = "#9ACD32";
        cases[10].style.backgroundColor = "#9ACD32";
        cases[18].style.backgroundColor = "#9ACD32";
        cases[26].style.backgroundColor = "#9ACD32";
        cases[34].style.backgroundColor = "#9ACD32";
        cases[42].style.backgroundColor = "#9ACD32";
        cases[50].style.backgroundColor = "#9ACD32";
        cases[58].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[3].innerHTML === joueurs[tour] &&
        cases[11].innerHTML === joueurs[tour] &&
        cases[19].innerHTML === joueurs[tour] &&
        cases[27].innerHTML === joueurs[tour] &&
        cases[35].innerHTML === joueurs[tour] &&
        cases[43].innerHTML === joueurs[tour] &&
        cases[51].innerHTML === joueurs[tour] &&
        cases[59].innerHTML === joueurs[tour] 
      ) {
        cases[3].style.backgroundColor = "#9ACD32";
        cases[11].style.backgroundColor = "#9ACD32";
        cases[19].style.backgroundColor = "#9ACD32";
        cases[27].style.backgroundColor = "#9ACD32";
        cases[35].style.backgroundColor = "#9ACD32";
        cases[43].style.backgroundColor = "#9ACD32";
        cases[51].style.backgroundColor = "#9ACD32";
        cases[59].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[4].innerHTML === joueurs[tour] &&
        cases[12].innerHTML === joueurs[tour] &&
        cases[20].innerHTML === joueurs[tour] &&
        cases[28].innerHTML === joueurs[tour] &&
        cases[36].innerHTML === joueurs[tour] &&
        cases[44].innerHTML === joueurs[tour] &&
        cases[52].innerHTML === joueurs[tour] &&
        cases[60].innerHTML === joueurs[tour] 
      ) {
        cases[4].style.backgroundColor = "#9ACD32";
        cases[12].style.backgroundColor = "#9ACD32";
        cases[20].style.backgroundColor = "#9ACD32";
        cases[28].style.backgroundColor = "#9ACD32";
        cases[36].style.backgroundColor = "#9ACD32";
        cases[44].style.backgroundColor = "#9ACD32";
        cases[52].style.backgroundColor = "#9ACD32";
        cases[60].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[5].innerHTML === joueurs[tour] &&
        cases[13].innerHTML === joueurs[tour] &&
        cases[21].innerHTML === joueurs[tour] &&
        cases[29].innerHTML === joueurs[tour] &&
        cases[37].innerHTML === joueurs[tour] &&
        cases[45].innerHTML === joueurs[tour] &&
        cases[53].innerHTML === joueurs[tour] &&
        cases[61].innerHTML === joueurs[tour] 
      ) {
        cases[5].style.backgroundColor = "#9ACD32";
        cases[13].style.backgroundColor = "#9ACD32";
        cases[21].style.backgroundColor = "#9ACD32";
        cases[29].style.backgroundColor = "#9ACD32";
        cases[37].style.backgroundColor = "#9ACD32";
        cases[45].style.backgroundColor = "#9ACD32";
        cases[53].style.backgroundColor = "#9ACD32";
        cases[61].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[6].innerHTML === joueurs[tour] &&
        cases[14].innerHTML === joueurs[tour] &&
        cases[22].innerHTML === joueurs[tour] &&
        cases[30].innerHTML === joueurs[tour] &&
        cases[38].innerHTML === joueurs[tour] &&
        cases[46].innerHTML === joueurs[tour] &&
        cases[54].innerHTML === joueurs[tour] &&
        cases[62].innerHTML === joueurs[tour] 
      ) {
        cases[6].style.backgroundColor = "#9ACD32";
        cases[14].style.backgroundColor = "#9ACD32";
        cases[22].style.backgroundColor = "#9ACD32";
        cases[30].style.backgroundColor = "#9ACD32";
        cases[38].style.backgroundColor = "#9ACD32";
        cases[46].style.backgroundColor = "#9ACD32";
        cases[54].style.backgroundColor = "#9ACD32";
        cases[62].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[7].innerHTML === joueurs[tour] &&
        cases[15].innerHTML === joueurs[tour] &&
        cases[23].innerHTML === joueurs[tour] &&
        cases[31].innerHTML === joueurs[tour] &&
        cases[39].innerHTML === joueurs[tour] &&
        cases[47].innerHTML === joueurs[tour] &&
        cases[55].innerHTML === joueurs[tour] &&
        cases[63].innerHTML === joueurs[tour] 
      ) {
        cases[7].style.backgroundColor = "#9ACD32";
        cases[15].style.backgroundColor = "#9ACD32";
        cases[23].style.backgroundColor = "#9ACD32";
        cases[31].style.backgroundColor = "#9ACD32";
        cases[39].style.backgroundColor = "#9ACD32";
        cases[47].style.backgroundColor = "#9ACD32";
        cases[55].style.backgroundColor = "#9ACD32";
        cases[63].style.backgroundColor = "#9ACD32";
        return true;
      }

      if (
        cases[0].innerHTML === joueurs[tour] &&
        cases[9].innerHTML === joueurs[tour] &&
        cases[18].innerHTML === joueurs[tour] &&
        cases[27].innerHTML === joueurs[tour] &&
        cases[36].innerHTML === joueurs[tour] &&
        cases[45].innerHTML === joueurs[tour] &&
        cases[54].innerHTML === joueurs[tour] &&
        cases[63].innerHTML === joueurs[tour] 
      ) {
        cases[0].style.backgroundColor = "#9ACD32";
        cases[9].style.backgroundColor = "#9ACD32";
        cases[18].style.backgroundColor = "#9ACD32";
        cases[27].style.backgroundColor = "#9ACD32";
        cases[36].style.backgroundColor = "#9ACD32";
        cases[45].style.backgroundColor = "#9ACD32";
        cases[54].style.backgroundColor = "#9ACD32";
        cases[63].style.backgroundColor = "#9ACD32";
        return true;
      }
    
      if (
        cases[7].innerHTML === joueurs[tour] &&
        cases[14].innerHTML === joueurs[tour] &&
        cases[21].innerHTML === joueurs[tour] &&
        cases[28].innerHTML === joueurs[tour] &&
        cases[35].innerHTML === joueurs[tour] &&
        cases[42].innerHTML === joueurs[tour] &&
        cases[49].innerHTML === joueurs[tour] &&
        cases[56].innerHTML === joueurs[tour] 
      ) {
        cases[7].style.backgroundColor = "#9ACD32";
        cases[14].style.backgroundColor = "#9ACD32";
        cases[21].style.backgroundColor = "#9ACD32";
        cases[28].style.backgroundColor = "#9ACD32";
        cases[35].style.backgroundColor = "#9ACD32";
        cases[42].style.backgroundColor = "#9ACD32";
        cases[49].style.backgroundColor = "#9ACD32";
        cases[56].style.backgroundColor = "#9ACD32";
        return true;
      }
    }
    
    function matchNul(cases) {
      for (let i = 0, len = cases.length; i < len; i++) {
        if (cases[i].innerHTML.length === 0) return false;
      }
    
      return true;
    }
    
    let Afficheur = function(element) {
      let affichage = element;
    
      function setText(message) {
        affichage.innerHTML = message;
      }
    
      return { sendMessage: setText };
    };
    
    function main() {
      let joueur1;
      joueur1 = prompt("joueur X")
      let cases = document.querySelectorAll("#Jeu button");
      let joueurs = ["X", "O"];
      let tour = 0;
      let jeuEstFini = false;
      let afficheur = new Afficheur(document.querySelector("#StatutDuJeu"));
      afficheur.sendMessage(
        "Le jeu peut commencer ! <br /> Joueur " +
        joueur1 +
          " c'est votre tour."
      );
      for (let i = 0, len = cases.length; i < len; i++) {
          cases[i].addEventListener("click", function() {
          if (jeuEstFini) return;
    
          if (!estValide(this)) {
            afficheur.sendMessage(
              "Case occupée ! <br />Joueur " +
                joueurs[tour] +
                " c'est toujours à vous !"
            );
          } else {
            setSymbol(this, joueurs[tour]);
            jeuEstFini = rechercherVainqueur(cases, joueurs, tour);
    
            if (jeuEstFini) {
              afficheur.sendMessage(
                "Le joueur " +
                  joueurs[tour] +
                  ' a gagné ! <br /> <a href="morpion8x8.html">Rejouer</a>'
              );
              return;
            }
    
            if (matchNul(cases)) {
              afficheur.sendMessage(
                'Match Nul ! <br/> <a href="morpion8x8.html">Rejouer</a>'
              );
              return;
            }
    
            tour++;
            tour = tour % 2;
            afficheur.sendMessage("C'est au tour du joueur " + joueurs[tour] + " !");
          }
        });
      }
    }
    
    main();