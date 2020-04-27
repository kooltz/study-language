const basicRejectPromise = new Promise((resolve, reject) => {
    reject("Error!");
}).catch(err => {
    console.log(err);
})