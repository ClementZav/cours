//Exercice7
let tabX = [];

//Boucle pour créer colonnes
for (let i = 0;i < 3; i++ ){
    let tabY = [];

    //Boucle pour créer Lignes
    for (let j = 0; j < 4; j++){
        tabY[j] = Math.floor((Math.random() * 10));
    }
    tabX.push(tabY);
}

console.log(tabX);