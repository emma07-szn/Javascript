let salary = -200000

if (salary>=0 && salary<5999){
    console.log('150')
}
else if(salary>=6000 && salary<=7999){
    console.log("300")
}
else if(salary>=8000 && salary<=11999){
    console.log("400")
}
else if(salary>=12000 && salary<=14999){
    console.log("500")
}
else if(salary>=15000 && salary<=19999){
    console.log("600")
}
else if(salary>=20000 && salary<=24999){
    console.log("750")
}
else if(salary>=25000 && salary<=29999){
    console.log("850")
}
else if(salary>=30000 && salary<=49999){
    console.log("1000")
}
else if(salary>=50000 && salary<=99999){
    console.log("1500")
}
else if(salary>=100000 ){
    console.log("2000")
}
else{
    console.log("INVALID")
}