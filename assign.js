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

let Name,Gender,Height,Mass,Skincolor,Eyecolor,Birth_year,Created,Edited,Films,Hair_color,
Home_world,Species,Starships,Vehicles;

Name = state.name;
Height = state.height;
Gender = state.gender;
Mass = state.mass;
Skincolor = state.skin_color;
Eyecolor = state.eye_color;
Birth_year=state.birth_year;
Created=state.created;
Edited=state.edited;
Films=state.films;
Hair_color=state.hair_color;
Home_world=state.homeworld;
Species=state.species;
Starships=state.starships;
Vehicles=state.vehicles;
character.innerHTML += `<div id="results1">
<h3 class="kem">Name:<b id="number">${Name}</b><h3>
<h3 class="kem">Gender:<b id="number">${Gender}</b><h3>
<h3 class="kem">Mass:<b id="number">${Mass}</b><h3>
<h3 class="kem">Height:<b id="number">${Height}</b><h3>
<h3 class="kem">Skin color:<b id="number">${Skincolor}</b><h3>
<h3 class="kem">Eye color:<b id="number">${Eyecolor}</b><h3>
<h3 class="kem">Birth_year:<b id="number">${Birth_year}</b><h3>
<h3 class="kem">Created:<b id="number">${Created}</b><h3>
<h3 class="kem">Edited:<b id="number">${Edited}</b><h3>
<h3 class="kem">Films:<b id="number">${Films}</b><h3>
<h3 class="kem">Hair_color:<b id="number">${Hair_color}</b><h3>
<h3 class="kem">Home_world:<b id="number">${Home_world}</b><h3>
<h3 class="kem">Species:<b id="number">${Species}</b><h3>
<h3 class="kem">Starships:<b id="number">${Starships}</b><h3>
<h3 class="kem">Vehicles:<b id="number">${Vehicles}</b><h3>
</div>`;