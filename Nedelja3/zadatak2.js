

let cena = 500;
let r = 16;

function cenaPice(cena, r){

    let povrsina = 2*r*Math.PI;

    return cena/povrsina;

}
console.log(cenaPice(500,16));

