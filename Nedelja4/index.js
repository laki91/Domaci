
let pokemon1 = {
    ime: 'Venusaur',
    vrsta: 'otrovni',
    img: 'venusaur.jpg',
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
    img: 'nidoking.jpg',
    sposobnosti: ['Poison Point', 'Rivalry'],
    karakteristike: {
        napad: 102,
        odbrana: 77,
        brzina: 85
    }
}

let pokemon3 = {
    ime: 'Arcanine',
    vrsta: 'vatreni',
    img: 'arcanine.jpg',
    sposobnosti: ['Intimidate', 'Justified'],
    karakteristike:{
        napad: 110,
        odbrana: 80,
        brzina: 95,
    }
}

let pokemon4 = {
    ime: 'Muk',
    vrsta: 'otrovni',
    img: 'muk.jpg',
    sposobnosti: ['Stench', 'Sticky Hold'],
    karakteristike: {
        napad: 105,
        odbrana: 75,
        brzina: 50
    }
}

let pokemon5 = {
    ime: 'Rhydon',
    vrsta: 'kameni',
    img: 'rhydon.jpg',
    sposobnosti: ['Rock Head', 'Reckless'],
    karakteristike: {
        napad: 130,
        odbrana: 75,
        brzina: 40
    }
}

let pokemon6 = {
    ime: 'Mewtwo',
    vrsta: 'psihicki',
    img: 'mewtwo.jpg',
    sposobnosti: ['Pressure', 'Unnerve'],
    karakteristike: {
        napad: 110,
        odbrana: 90,
        brzina: 130
    }
}

let prikaziSvePokemone = document.querySelector('#prikaz');
let prikaziNajjaceg = document.querySelector('#pobednik');
let app = document.querySelector('#app');
let wrap = document.querySelector('.wrapper');


prikaziSvePokemone.addEventListener('click', pokem)
prikaziNajjaceg.addEventListener('click', najjaci)

function pokem(){
    let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];
    for(el of pokemoni){
        let pokem = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.img
        app.appendChild(pokem)
        pokem.appendChild(img)
        pokem.innerHTML += ` ime: ${el.ime} <br>vrsta: ${el.vrsta} <br>sposobnosti:<br> ${el.sposobnosti} <br>karakteristike: ${el.karakteristike.napad}, ${el.karakteristike.odbrana}, ${el.karakteristike.brzina}  `
        
    }
   
}


let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

function najjaci(){
    let najjaci = pokemoni[0];

    pokemoni.forEach(el => {
        if(el.karakteristike.napad > najjaci.karakteristike.napad){
            najjaci = el;
            return najjaci
        }
    })

    let POKEMON = document.createElement('div')
    let IMG = document.createElement('img')
    IMG.src = najjaci.img
        app.appendChild(POKEMON)
        POKEMON.appendChild(IMG)

        POKEMON.innerHTML += `ime: ${najjaci.ime} <br>vrsta: ${najjaci.vrsta} <br>sposobnosti:<br> ${najjaci.sposobnosti} <br>karakteristike: ${najjaci.karakteristike.napad}, ${najjaci.karakteristike.odbrana}, ${najjaci.karakteristike.brzina}`
}