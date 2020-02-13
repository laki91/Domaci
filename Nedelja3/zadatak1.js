


function maxBroj(br1, br2, br3){
    let maxBroj = br1;

    if(br2 > maxBroj){
        maxBroj = br2;
    }

    if(br3 > maxBroj){
        maxBroj = br3;
    }
    
    return maxBroj;
}

console.log(maxBroj(50, 70, 105));