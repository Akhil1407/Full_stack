//DOM manipulation
//1). selecting with id
let index=document.getElementById("akhil")
console.dir(index);
console.log(index);
//2).selecting with class
let glass=document.getElementsByClassName("myclass")
console.dir(glass);
console.log(glass);
//3).selecting with tag
let Bag=document.getElementsByTagName("p")
console.dir(Bag);
console.log(Bag);
//queryselector
let firstelement=document.querySelector("#akhil")
console.log(firstelement);
console.dir(firstelement);
//querySelector returns node list
let allelement=document.querySelector("p")
console.log(allelement);
console.dir(allelement);
let h2=document.querySelector("h2");
h2.innerText=h2.innerText+"from online classes";
console.dir(h2.innerText);
console.log(h2.innerText);
