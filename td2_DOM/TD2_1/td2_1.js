function ModifMarathon(){
    //Insérer un article 0 en indiquant sa règle
    let body = document.getElementsByTagName("body")[0];

    let article0 = document.createElement("h2");
    article0.innerHTML = "Article 0 - Doubler";

    let descriptionArtc0 = document.createElement("p");
    descriptionArtc0.innerHTML = "Il est interdit de vous doubler, sous peine de discalification.";

    body.prepend(descriptionArtc0);
    body.prepend(article0);
  
    //Rendre les titres h2 en majucule avec un style 
    let titres = body.querySelectorAll("h2");
    console.log(titres);
    
    //soit utiliser le 1er for
    //for (let i = 0; i <= titres.length -1; i++){
    
    //soit le 2eme
    //pour tout les éléments de la liste titres
    for (let titre of titres){
        //permet de mettre en majuscule le contenue dans la balise h2
        titre.innerHTML = titre.innerHTML.toUpperCase();
        //Mets le style Impact sur toutes les balises h2
         titre.style.fontFamily = 'impact';
    }
    
    //Mettre un fond de couleur à un article sur deux
    let couleursur2 = document.querySelectorAll("h2:nth-of-type(2n+2)");
    for (let i = 0; i<= couleursur2-1; i++){
    couleursur2[0].style.color = 'green';
    }

    //inverser l'ordres des trois périodes d'inscription
    let liPeriode = document.getElementsByTagName("li");
    console.log(liPeriode);
}
ModifMarathon();
