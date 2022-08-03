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
const button = document.querySelector("#button1");

button.addEventListener("click", () => {
  const sum = add(+input1.value, +input2.value);
  console.log(sum);
});

// inference type
let age2 = 20; //nie trzeba wpisywac ze number bo inference sam wykryje ale tylko jesli zadeklarujemy
// w funcjach zawsze powinnismy przekazywac deklaracje bo nie dziala inference gdy nie zadeklarujesz

// union type
const logAge = (age: number | string | boolean) => {
  console.log(`hej mam ${age} lat`);
};
// union type pozwala wybrac wiecej wrtosci
logAge(28);
logAge("dwadzieścia osiem");
logAge(true);

//boolean in practice
const buttonBoolean = document.querySelector("#button2");

const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
  return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
};

buttonBoolean.addEventListener("click", () => {
  const orginalPrice = 40;
  const hasDiscount: boolean =
    new URLSearchParams(window.location.search).get("discount") === "true";
  console.log(calculatePrice(orginalPrice, hasDiscount));
});

//array in practice

const tasksContainer: HTMLElement = document.querySelector("#tasks3");
const tasksInput: HTMLInputElement = document.querySelector("#input3");
const tasksButton: HTMLButtonElement = document.querySelector("#button3");

const tasks: string[] = ["wyrzucic śmieci", "umyć zęby", "napraw kod"];

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  tasks.forEach((t) => {
    const taskElement: HTMLLIElement = document.createElement("li");
    taskElement.innerText = t;
    tasksContainer.appendChild(taskElement);
  });
};

tasksButton.addEventListener("click", (e: Event) => {
  e.preventDefault();
  tasks.push(tasksInput.value);
  renderTasks();
});

renderTasks();
