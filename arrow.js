//Traditional
function multiply(a,b){
    return a*b;
}
//Arrow
const multiplyArrow = (a,b) => a * b;

console.log("Traditional",multiply(5,5));
console.log("Arrow",multiplyArrow(5,2));

// Arrow function doesn't have their own this.
const user ={
    name: "Kaushik",
    traditionalFunc: function (){
        console.log("Traditional", this.name);
    },
     arrowFunc : () => {
         console.log("Arrow", this.name);
     }
}
user.traditionalFunc();
user.arrowFunc();

//setTimeout Function with arrow function.
function Timer() {
    this.time = 0;

    setTimeout(() => {
        this.time++;
        console.log("Arrow `this`:", this.time); // 1
    }, 1000);
}
new Timer();
