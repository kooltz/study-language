let funcUpper = (a: string) => a;
let funcSub = (a: string, b: string) => a + b;

funcSub = funcUpper;
// funcUpper = funcSub;
console.log(`${funcSub("hello", "world")}`);