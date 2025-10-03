async function main(){
    //sans then.json() le type rHTTP est un objet
    const rHTTP_arr = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/10").then(res=>res.json());

    //const pokemons_arr = await rHTTP_arr.json();
    
    console.log(rHTTP_arr);
}
main();