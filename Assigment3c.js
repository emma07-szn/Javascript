// write a for loop to find the largest number in array

let num = [10,20,4,45,99,1,800]

let largest = num[0]

for (let i = 1; i<=num.length; i++){
    if(num[i]>largest){
        largest =num[i]
    }
}
console.log(largest)
// multiplication 5*1 to 5*10
