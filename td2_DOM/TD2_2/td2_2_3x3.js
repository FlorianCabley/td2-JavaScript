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
      cases[2].innerHTML === joueurs[tour]
    ) {
      cases[0].style.backgroundColor = "#9ACD32";
      cases[1].style.backgroundColor = "#9ACD32";
      cases[2].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[3].innerHTML === joueurs[tour] &&
      cases[4].innerHTML === joueurs[tour] &&
      cases[5].innerHTML === joueurs[tour]
    ) {
      cases[3].style.backgroundColor = "#9ACD32";
      cases[4].style.backgroundColor = "#9ACD32";
      cases[5].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[6].innerHTML === joueurs[tour] &&
      cases[7].innerHTML === joueurs[tour] &&
      cases[8].innerHTML === joueurs[tour]
    ) {
      cases[6].style.backgroundColor = "#9ACD32";
      cases[7].style.backgroundColor = "#9ACD32";
      cases[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[0].innerHTML === joueurs[tour] &&
      cases[3].innerHTML === joueurs[tour] &&
      cases[6].innerHTML === joueurs[tour]
    ) {
      cases[0].style.backgroundColor = "#9ACD32";
      cases[3].style.backgroundColor = "#9ACD32";
      cases[6].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[1].innerHTML === joueurs[tour] &&
      cases[4].innerHTML === joueurs[tour] &&
      cases[7].innerHTML === joueurs[tour]
    ) {
      cases[1].style.backgroundColor = "#9ACD32";
      cases[4].style.backgroundColor = "#9ACD32";
      cases[7].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[2].innerHTML === joueurs[tour] &&
      cases[5].innerHTML === joueurs[tour] &&
      cases[8].innerHTML === joueurs[tour]
    ) {
      cases[2].style.backgroundColor = "#9ACD32";
      cases[5].style.backgroundColor = "#9ACD32";
      cases[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[0].innerHTML === joueurs[tour] &&
      cases[4].innerHTML === joueurs[tour] &&
      cases[8].innerHTML === joueurs[tour]
    ) {
      cases[0].style.backgroundColor = "#9ACD32";
      cases[4].style.backgroundColor = "#9ACD32";
      cases[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      cases[2].innerHTML === joueurs[tour] &&
      cases[4].innerHTML === joueurs[tour] &&
      cases[6].innerHTML === joueurs[tour]
    ) {
      cases[2].style.backgroundColor = "#9ACD32";
      cases[4].style.backgroundColor = "#9ACD32";
      cases[6].style.backgroundColor = "#9ACD32";
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
                ' a gagné ! <br /> <a href="morpion3x3.html">Rejouer</a>'
            );
            return;
          }
  
          if (matchNul(cases)) {
            afficheur.sendMessage(
              'Match Nul ! <br/> <a href="morpion3x3.html">Rejouer</a>'
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