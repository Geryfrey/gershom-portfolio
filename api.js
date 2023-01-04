const btn = document.getElementById("btn1");
const character = document.getElementById("resultcontainer");
const check = document.getElementById("check");
const paragraph = document.getElementById("gname");
const btn2 = document.getElementById("btn2");
const more = document.getElementById("more");
let keep = [];

fetch("https://swapi.dev/api/people/")
.then((response) =>{
    return response.json();
})
.then(data =>{
    // keep = JSON.parse(data);
    keep = data.results;
    localStorage.setItem('keep',JSON.stringify(keep));
    console.log(keep);
    console.log(keep.length);
    
    console.log(keep.length);
    for(let i = 1; i < keep.length;i++){
         fetch('https://swapi.dev/api/people/' + i + '/') 
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.name);
                // let store = JSON.stringify(data)
                // localStorage.setItem('stone',store);
                character.innerHTML += `<div id="results"${i}">
                <h2 class="melo">Character :<b id="number">${i}</b><h2>
                <h2 class="melo">Name:${data.name}</h2>
                <h2 class="melo">Gender</b>:${data.gender}</h2>
                <a href="#" class="btn2" id="more" onclick="mores(${i})">More Details</a>
                </div>`;
            })}

})
let mores = (b) =>{

    console.log("button clicked");    
    localStorage.setItem('more',b-1);
    location.href = "result.html";
    
    }

