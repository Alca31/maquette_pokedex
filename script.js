async function pokedex() {
    //sans then.json() le type rHTTP est un objet

    return rHTTP_arr = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/150").then(res => res.json());
}

async function seekApkmn(search) {
    return rHTTP_arr = await fetch("https://pokebuildapi.fr/api/v1/pokemon/" + search).then(res => res.json());
}

const seek = document.querySelector("#seek");
seek.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchValue = document.querySelector("#query").value;
    const pokemon = await seekApkmn(searchValue);
    const showDetail = document.querySelector("#showDetail");
     const Apkmn = document.querySelector("#Apkmn").content.cloneNode(true);
    const npkdex = Apkmn.querySelector(".npkdex");
    const name = Apkmn.querySelector("h2");
    const img = Apkmn.querySelector(".img");
    const types = Apkmn.querySelector(".types");
    npkdex.textContent = pokemon.pokedexId;
    name.textContent = pokemon.name;
    img.src = pokemon.image;
    types.innerHTML = "";
    /*
    pokemon.apiTypes.forEach(function (type) {
        const itype = document.createElement("img);
        itype.src=pokemon.apiTypes.image;
        types.appendChild(ptype);
    });
    */
   showDetail.appendChild(Apkmn);
});




async function showPokedex() {
    const pokemons_arr = await pokedex();
    console.log(pokemons_arr);
    const showdex = document.querySelector("#pkmnCard");
    pokemons_arr.forEach(function (pokemon) {
        const showCardList = document.querySelector("#showCardList");
        const showPkm = document.querySelector("#pkmnCard").content.cloneNode(true);
        const npkdex = showPkm.querySelector(".npkdex");
        npkdex.textContent = pokemon.pokedexId;
        const name = showPkm.querySelector("h2");
        name.textContent = pokemon.name;
        const sprite = showPkm.querySelector(".sprite");
        sprite.src = pokemon.sprite;
        showCardList.appendChild(showPkm);
        const clickApokemon = document.querySelector(".pkdex");

        clickApokemon.addEventListener("click", function () {

        });
    });
    return pokemons_arr;
}

showPokedex();

