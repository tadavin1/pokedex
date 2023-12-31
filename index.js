"use strict";

let pokeList = document.querySelector(".pokeList");

const form = document.querySelector(".form");

const submitBtn = document.querySelector(".submit");

const favPokeList = document.querySelector(".favList");

let pokeId;
let favPokemon = [];

function renderPoke() {
  const getName = document.querySelector(".search").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${getName}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const pokeName = data.name;

      const pokeCard = {};
      pokeList.innerHTML = `
     
      <div class ="pokeCard">
     
      <img src="${
        data.sprites.other["official-artwork"].front_default
      }" class="pokeImg" />
      <div class="pokeData">
      <h1><span id = "nameID"> ${
        pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
      }</span></h1>
      
      <div class ="pokeDetails"> 
      <h3>#${data.id}</h3>
      <p>Type: ${
        data.types[0].type.name.charAt(0).toUpperCase() +
        data.types[0].type.name.slice(1)
      }</p>
      <p>Height: ${data.height}<span class="units">dm</span></p>  
      <p>Weight: ${data.weight}<span class="units">hg</span></p>  
      </div>
      </div>
      <div> <button class="addFav">+ Add to Favorites</button></div>
      </div>
      `;
      pokeList.addEventListener("click", function (e) {
        if (e.target && e.target.matches("button.addFav")) {
          favPokemon.push(pokeName);
        }
      });
    });
}

function renderFav() {
  for (let i = 0; i < favPokemon.length; i++) {}
  fetch(`https://pokeapi.co/api/v2/pokemon/${getName}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.name);
    });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderPoke();
});
