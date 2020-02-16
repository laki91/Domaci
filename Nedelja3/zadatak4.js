
let mesecno = 5;
let godine = 28;

function zaZivota(mesecno, godine){
    
    let kolicina = ((100-godine)*12)*mesecno;
    
    return kolicina;
}

console.log(zaZivota(mesecno, godine));