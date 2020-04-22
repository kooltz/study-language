function nevertest(value: string | number) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        return value;
    }
}
console.log(nevertest("test"));