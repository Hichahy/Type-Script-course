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
const button = document.querySelector("#button1");
button.addEventListener("click", () => {
    const sum = add(+input1.value, +input2.value);
    console.log(sum);
});
// inference type
let age2 = 20; //nie trzeba wpisywac ze number bo inference sam wykryje ale tylko jesli zadeklarujemy
// w funcjach zawsze powinnismy przekazywac deklaracje bo nie dziala inference gdy nie zadeklarujesz
// union type
const logAge = (age) => {
    console.log(`hej mam ${age} lat`);
};
// union type pozwala wybrac wiecej wrtosci
logAge(28);
logAge("dwadzieścia osiem");
logAge(true);
//boolean in practice
const buttonBoolean = document.querySelector("#button2");
const calculatePrice = (orginalPrice, hasDiscount) => {
    return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
};
buttonBoolean.addEventListener("click", () => {
    const orginalPrice = 40;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(orginalPrice, hasDiscount));
});
