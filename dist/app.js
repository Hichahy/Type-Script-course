//basic types number, sting
let age = 28;
let ageAsString = "dwadzieścia osiem";
ageAsString = "dwa";
ageAsString = `${age}`;
console.log(`ageAsString`, ageAsString);
//types in functions
const add = (v1, v2) => v1 + v2;
//types in practice
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const sum = add(+input1.value, +input2.value);
    console.log(sum);
});
