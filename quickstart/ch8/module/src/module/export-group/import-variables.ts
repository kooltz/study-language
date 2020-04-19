import { ver, author, extentions, display } from "./export-variables";
console.log("Api Version : ", ver);
console.log("Api Name : ", author);
extentions.forEach(s => {
    console.log("extenstions : ", s);
});
console.log("display() : ", display());