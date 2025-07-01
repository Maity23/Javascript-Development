setTimeout(function () {
    console.log("Timer");
}, 5000);

function x(y) { //Higher order function
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});
