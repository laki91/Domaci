

let x = 0;
let add = document.querySelector('#add');
let order = document.querySelector('#order');

addEventListener('click', function(){
    x++;
    document.querySelector('#count').innerHTML = x;
});

order.addEventListener('click', function(){
    if(x == 0){
        document.querySelector('#tekst').innerHTML += 'Ne mozete naruciti picu. <br>'}
    else{
        document.querySelector('#tekst').innerHTML += `Narucili ste ${x} pica,
        ${new Date().getMonth() +1}/${new Date().getDate()}/${new Date().getFullYear()}<br>`;
        x = 0;
        document.querySelector('#count').innerHTML = x;
    }
});