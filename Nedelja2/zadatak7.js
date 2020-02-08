

let n = 5;
let x = '';

for(let i = 0; i < n; i++){

    for(let j = 0; j <= i; j++){
        x += '#';
    }
    x += '\n';
}

console.log(x);