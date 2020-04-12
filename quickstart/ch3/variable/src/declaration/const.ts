const birthMonth = 9;
if (true) {
    const birthMonth = 12;
}
console.log(birthMonth);

const profile = {
    name: "happy",
    month: birthMonth
};
// const profile = "happy";
profile.name = "happy2";
profile.month--;

console.log(profile);