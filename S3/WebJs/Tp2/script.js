//Exercice1
console.log("Exercice 1");

function f(tab){
    let res = true;
    for(let i = 0;i<tab.length;i++){
        if (i !=tab.length -1){
            if (tab[i] > tab[i+1]){
                res = false;
            }
        }
    }
    return res;
}
console.log(f([1,2,3,4,7,8,9]))

//Exercice2
console.log("Exercice 2");

function r(tab1, tab2){
    let res = false
    if (tab1.length != tab2.length){
        return false;
    }
    for (let i = 0; i<tab1.length;i++){
        if (tab1[i] != tab2[i]){
            return false;
        }
    }
    return true;
}
console.log(r([1,2,3,4,5,6],[1,2,3,4,5,7]))

//Exercice 3
console.log("Exercice 3");

let t2 = [5, 7, 9, 8, 7, 22, 25, 26];

let b1 = t2.some(element=>element==22);
console.log("Variable b1 = ", b1);

let j = t2.findIndex(element=>element==22);
console.log("Variable j = ", j);

let b2 = t2.every(element=>element>2);
console.log("Variable b2 = " + b2);

/*******************************/

let t3 = t2.map(valeur=>valeur*2);
console.log("Tableau t3 = " + t3);

let t4 = t2.filter(valeur=>valeur<8);
console.log("Tableau t4 = " + t4);

let t5 = ["BB", "aa", "cc", "DD"];
t5.sort();
console.log("Tableau t5 = " + t5);

t5.sort((x,y)=>x.localeCompare(y));
console.log("Tableau t5 = " + t5);

//Exercice 4
console.log("Exercice 4");

let tab2 = [
    [2, 3, 5],
    [5, 6, 7],
    [1, 4, 8]
];
let res = [];
for(let i = 0;i<tab2.length;i++){
    for(let j = 0;j <tab2[i].length;j++){
        if (i==j){
            res.push(tab2[i][j]);
        }
    }
}
console.log(res);
let tab1=[];
for(let i = 0;i<tab2.length;i++){
    for(let j = 0;j <tab2[i].length;j++){
        tab1.push(tab2[i][j]);
    }
}
console.log(tab1);

let tab3 = tab1.map(x=>x*10);
console.log(tab3);

let tab4 = tab1.filter(x=>x>2);
console.log(tab4);

let tab5 = tab1.filter(x=>x>2).map(x=>x*10);
console.log(tab5);

//Exercice 5
console.log("Exercice 5");

let tab8 = [0,1,2,3,4];
let max = tab8.reduce((a,b)=>{
    let res = a;
    if (res < b){
        res = b;
    }
    return res;
})
console.log(max);
let reschaine = "";
let tabs = ["toto","titi","tata"];
let chaine = tabs.reduce((a,b)=>{
    let res = a+b;
    return res;
})

console.log(chaine);
console.log(tabs.join(''));