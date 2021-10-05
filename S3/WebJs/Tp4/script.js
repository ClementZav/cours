function createTable(json){
    let tab=json['students']; //Recuperation du tableau students du fichier Json
    let liste = tab.map(id=>{
        let nom = id['firstname'];
        let prenom =id['lastname'];
        let avatar = "<td><img src='https://www.cril.univ-artois.fr/~lecoutre/animals/000.png'/></td>";
        let res = ["<td>"+nom+"</td>", "<td>"+prenom+"</td>", avatar];
        return res;
    });
    for (let i =0;i<liste.length;i++){
        let tr = document.createElement("tr");
        for (let j=0; j <liste[i].length;j++){
            tr.innerHTML+=liste[i][j];
            console.log(liste[i][j])
        }
        document.getElementById('student').appendChild(tr);
    }
}
const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText);
    createTable(data);
});
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/students.json");
req.send();



let tableEtu = document.getElementById("student");
let champ = document.querySelector("input");

tableEtu.innerHTML="<tr><th>First Name</th><th>Last Name</th><th>Avatar</th></tr>";
