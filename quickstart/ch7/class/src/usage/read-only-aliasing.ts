let emotion: { readonly name: string } = { name: "sad" };

function aliasing(pEmotion: { name: string }) {
    pEmotion.name = "happy";
}

console.log(emotion.name);
// emotion.name = "happy";
aliasing(emotion);
console.log(emotion.name);
