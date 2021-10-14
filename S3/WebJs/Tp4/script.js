<<<<<<< HEAD
function createTable(tab){
    let liste = tab.map(id=>{ //Creation d'un tableau a partir de student contenant nom/prenom/avatar
=======
function createTable(json){
    let tab=json['students']; //Recuperation du tableau students du fichier Json
    let liste = tab.map(id=>{
>>>>>>> 51686cf673314bdfa54109b76453879eab1dbbe1
        let nom = id['firstname'];
        let prenom =id['lastname'];
        let avatar = "<td><img src='https://www.cril.univ-artois.fr/~lecoutre/animals/000.png'/></td>";
        let res = ["<td>"+nom+"</td>", "<td>"+prenom+"</td>", avatar];
        return res;
    });
    for (let i =0;i<liste.length;i++){
<<<<<<< HEAD
        let tr = document.createElement("tr"); //Creation d'une ligne
        for (let j=0; j <liste[i].length;j++){
            tr.innerHTML+=liste[i][j];
=======
        let tr = document.createElement("tr");
        for (let j=0; j <liste[i].length;j++){
            tr.innerHTML+=liste[i][j];
            console.log(liste[i][j])
>>>>>>> 51686cf673314bdfa54109b76453879eab1dbbe1
        }
        document.getElementById('student').appendChild(tr);
    }
}
<<<<<<< HEAD
let tabEtu = [];
const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText);
    tabEtu = data['students']; //Recuperation du tableau students du fichier Json
    createTable(tabEtu);
=======
const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText);
    createTable(data);
>>>>>>> 51686cf673314bdfa54109b76453879eab1dbbe1
});
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/students.json");
req.send();


<<<<<<< HEAD
=======

let tableEtu = document.getElementById("student");
>>>>>>> 51686cf673314bdfa54109b76453879eab1dbbe1
let champ = document.querySelector("input");
let tableEtu = document.getElementById("student");

tableEtu.innerHTML="<tr><th>First Name</th><th>Last Name</th><th>Avatar</th></tr>";

champ.addEventListener("keyup", evt=>{
    let input = new RegExp(document.querySelector('input').value);
    let tabfilter = tabEtu.filter();
})
