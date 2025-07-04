const cart = ["watch", "shoe", "bike"];

const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
});

function createOrder(cart) {
    const prom = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "521021";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return prom;
}

function validateCart(cart) {
    return true;
}