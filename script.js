
let quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', () => {
    pegaPokemons(quantidade.value);
})

pegaPokemons(6);
function pegaPokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10' + quantidade)
        .then(response => response.json())
        .then(allpokemon => {

            var pokemons = [];

            allpokemon.results.map((val) => {

                fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default });

                        if (pokemons.length == quantidade) {
                            //finalizamos nossas requisições

                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";


                            //console.log(pokemons);
                            pokemons.map(function (val) {
                                pokemonBoxes.innerHTML += `
                            <div class="pokemon-box">
                            <img src="`+ val.imagem + `">
                                <h4>`+ val.nome + `</h4>
                            </div>
                            `
                            })
                        }
                    })
            })
        })

}
