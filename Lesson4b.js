// anonymous-->its a function without a name


const greet=function(){
    console.log("Welcome to a world of great impossibility");
}


greet()



const add=function(a,b){
    let sum =a+b
    console.log(`Sum of two numbers is ${sum}`)
}

add(9,8);



// self executing anonymous function
(function(){
    console.log("Welcome to another world of impossibility");
})();