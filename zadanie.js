function IsPrime(x){
    if(x<2){
        return false;
    }
    for(let i=2;i<x;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}
function PrimeNumbersInTheRange(x,y){
    console.log("Liczby pierwsze z zakresu: "+x+" "+y);
    for(let i=x;i<=y;i++){
        if(IsPrime(i)){
            console.log(i);
        }
    }
}

let a=2021;
let b=11;
let c=7;

let x=1;
let y=29;

console.log(IsPrime(a));
console.log(IsPrime(b));
console.log(IsPrime(c));

console.log(PrimeNumbersInTheRange(x,y));
