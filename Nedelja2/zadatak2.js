
var cena = 70;
var budzet = 100;

if(cena > budzet) {
    console.log('Nemate dovoljno novca');
    console.log('Trenutno stanje ' + budzet);
}else {
    console.log('Uspesno ste kupili proizvod');
    console.log('Trenutno stanje ' + (budzet - cena));
}