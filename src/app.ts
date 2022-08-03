//basic types number, sting
let age: number = 28;

let ageAsString: string = "dwadzieścia osiem";
ageAsString = "dwa";
ageAsString = `${age}`;

console.log(`ageAsString`, ageAsString);

//types in functions
const add = (v1: number, v2: number) => v1 + v2;

//types in practice
const input1: HTMLInputElement = document.querySelector("#input1");
const input2: HTMLInputElement = document.querySelector("#input2");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const sum = add(+input1.value, +input2.value)
    console.log(sum)
})
