
// Below function will not return any value. Hence it is a void function
function greater(a,b){

    if(a>b){
        console.log(a+" is greater than "+b);
    }
    else{
        console.log(b+" is greater than "+a);
    }
}

let x=5,y=10;
console.log(greater(x,y));

//Below function will return a value
// any statemnet written after return statement inside a function will not be executed(Unreachable code)
function multiply(a,b,c){
    let mul=a*b*c;
    return mul;
}

let x1=2,y1=3,z=5;
console.log("The result is "+ multiply(x1,y1,z));
