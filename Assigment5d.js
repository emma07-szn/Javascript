// const num
// largest

const num = [ 12, 5 ,8 ,20, 3,15,10];

let largest=num[0]
let smallest=num[3]
let sum=0


for(let a=0;a<num.length;a++){
    sum+=num[a]
}



for (let i=0;i<=num.length;i++){
    if(num[i]<smallest){
        smallest=num[i]
    }
}

for (let i=0;i<=num.length;i++){
    if(num[i]>largest){
        largest=num[i]
    }
}


console.log(`The sum is ${sum}`)
console.log(largest);
console.log(smallest);


