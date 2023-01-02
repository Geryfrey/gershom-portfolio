const character = document.getElementById("container");
const check = document.getElementById("check");
const paragraph = document.getElementById("gname");
var str = '1';
var i ,state;
i = localStorage.getItem('more')
console.log(i);
state = JSON.parse(localStorage.getItem('keep'))[i]
console.log(JSON.parse(localStorage.getItem('keep'))[i]);
console.log(state);
console.log(state.name)
// let Name,Gender,Height,Mass,Skincolor,Eyecolor;
// Name = JSON.parse(localStorage.getItem('stone')).name;
// Height = JSON.parse(localStorage.getItem('stone')).height;
// Gender = JSON.parse(localStorage.getItem('stone')).gender;
// Mass = JSON.parse(localStorage.getItem('stone')).mass;
// Skincolor = JSON.parse(localStorage.getItem('stone')).skin_color;
// Eyecolor = JSON.parse(localStorage.getItem('stone')).eye_color;

let Name,Gender,Height,Mass,Skincolor,Eyecolor;
Name = state.name;
Height = state.height;
Gender = state.gender;
Mass = state.mass;
Skincolor = state.skin_color;
Eyecolor = state.eye_color;
character.innerHTML += `<div id="results1">
<h3 class="kem">Name:<b id="number">${Name}</b><h3>
<h3 class="kem">Gender:<b id="number">${Gender}</b><h3>
<h3 class="kem">Mass:<b id="number">${Mass}</b><h3>
<h3 class="kem">Height:<b id="number">${Height}</b><h3>
<h3 class="kem">Skin color:<b id="number">${Skincolor}</b><h3>
<h3 class="kem">Eye color:<b id="number">${Eyecolor}</b><h3>
</div>`;