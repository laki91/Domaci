
let br1 = 105;
let br2 = 60;
let br3 = 90;


function maxBroj(){
    let maxBroj = br1;

    if(br2 > maxBroj){
        maxBroj = br2;
    }

    if(br3 > maxBroj){
        maxBroj = br3;
    }
    
    return maxBroj;
}

console.log(maxBroj(br1,br2,br3));