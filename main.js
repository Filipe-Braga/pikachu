const fetch = require('node-fetch');
console.log ('ok');

function request(){
    const url = 'https://pokeapi.co/api/v2/';
    const endpoint = 'pokemon/pikachu'

    fetch (url + endpoint)

        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('erro');
        })
}

request();