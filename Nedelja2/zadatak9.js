

let n = 5;
let raz = ' ';
let red = '';

    for(i = 1; i <= n; i++){

        red = raz.repeat(n-i) + '#'.repeat(i) + raz + '#'.repeat(i);
        
        console.log(red);

    }