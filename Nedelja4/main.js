//zadatak1

let pokemon1 = {
    ime: 'Venusaur',
    vrsta: 'otrovni',
    sposobnosti: ['Overgrow', 'Chlorophyll'],
    karakteristike: {
        napad: 82,
        odbrana: 83,
        brzina: 80
    }
    
}

let pokemon2 = {
    ime: 'Nidoking',
    vrsta: 'zemljani',
    sposobnosti: ['Poison Point', 'Rivalry', 'Sheer Force'],
    karakteristike: {
        napad: 102,
        odbrana: 77,
        brzina: 85
    }
}

let pokemon3 = {
    ime: 'Arcanine',
    vrsta: 'vatreni',
    sposobnosti: ['Intimidate', 'Flash Fire', 'Justified'],
    karakteristike:{
        napad: 110,
        odbrana: 80,
        brzina: 95,
    }
}

let pokemon4 = {
    ime: 'Muk',
    vrsta: 'otrovni',
    sposobnosti: ['Stench', 'Sticky Hold', 'Poison Touch'],
    karakteristike: {
        napad: 105,
        odbrana: 75,
        brzina: 50
    }
}

let pokemon5 = {
    ime: 'Rhydon',
    vrsta: 'kameni',
    sposobnosti: ['Lightning Rod', 'Rock Head', 'Reckless'],
    karakteristike: {
        napad: 130,
        odbrana: 75,
        brzina: 40
    }
}

let pokemon6 = {
    ime: 'Mewtwo',
    vrsta: 'psihicki',
    sposobnosti: ['Pressure', 'Unnerve'],
    karakteristike: {
        napad: 110,
        odbrana: 90,
        brzina: 130
    }
}

var pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];


//zadatak2

let nizSposobnosti = [];
    
function sveSposobnosti(spos){
    spos.forEach(pokem => {
        nizSposobnosti.push(...pokem.sposobnosti);
        return nizSposobnosti;
    });
    console.log(nizSposobnosti);
}

sveSposobnosti(pokemoni);


//zadatak3

pokemoni.sort((a,b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina;
})

console.log(pokemoni);


//zadatak4


function najjaci(pokemoni){
    let najjaci = pokemoni[0];

    pokemoni.forEach(el => {
        if(el.karakteristike.napad > najjaci.karakteristike.napad){
            najjaci = el;
        }
    });
    return najjaci;
}

console.log(najjaci(pokemoni));


