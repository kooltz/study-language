let itMap = new Map([["one", 1], ["two", 2]]);
itMap.set("one", 3);

for(let entry of itMap) {
    console.log(entry);
}
console.log(itMap.get("one"))