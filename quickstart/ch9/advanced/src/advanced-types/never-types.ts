const neverTouch = function (): never {
    while (true) {
        console.log("Never");
    }
    console.log();
};
let resultNever: never = neverTouch();