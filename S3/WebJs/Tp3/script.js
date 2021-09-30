function swapImg(idA,idB){
    let tmp = document.getElementById(idA).src;
    document.getElementById(idA).src=document.getElementById(idB).src;
    document.getElementById(idB).src=tmp;

}
let index = 0;
let selectElem = document.getElementById("select");
document.getElementById("select").addEventListener('change', ()=> {index = selectElem.selectedIndex;});
document.getElementById("img").src = (index)=> "Images/img"+index+".jpg";

