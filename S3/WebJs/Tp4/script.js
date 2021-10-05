const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText);
    console.log(data);
    let tab = data['students'];
    tab.map(id=>{
        for (let i=0; i <id.length;i++){
            tableEtu
        }
    })
    console.log(tab);
});
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/students.json");
req.send();

let tableEtu = document.getElementById("student");
let champ = document.querySelector("input");

console.log(tableEtu, champ);
tableEtu.innerHTML="<tr><th>First Name</th><th>Last Name</th><th>Avatar</th></tr>";
