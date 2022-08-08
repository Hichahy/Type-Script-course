import { Task, Category } from "./types/types.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";

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

const tasksContainer: HTMLElement = document.querySelector("#tasks3");
const tasksInput: HTMLInputElement = document.querySelector("#input3");
const tasksButton: HTMLButtonElement = document.querySelector("#button3");
const categoriesContainer: HTMLElement = document.querySelector("#categories");

//array in practice
// const tasks: string[] = ["wyrzucic śmieci", "umyć zęby", "napraw kod"];

//object in practice

//type alias
// type Category = "general" | "work" | "gym" | "hobby";

// //interface
// interface Task {
//   name: string;
//   done: boolean;
//   // category?: string;
//   // category?: "general" | "work" | "gym" | "hobby"; //literal type + union type
//   category?: Category; //type alias
// }

let selectedCategory: Category;
const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
  Category.SOCIAL,
];

const tasks: Task[] = [
  { name: "wyrzucic śmieci", done: false, category: Category.GYM },
  { name: "umyć zęby", done: true, category: Category.HOBBY },
  { name: "napraw kod", done: false, category: Category.WORK },
];

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

tasksButton.addEventListener("click", (e: Event) => {
  const selectedRadioElement: HTMLInputElement = document.querySelector(
    "input[type='radio']:checked"
  );
  // const selectedCategory: Category = selectedRadioElement.value as Category; //as mean you tell ts you are sure that's category and ts trust you

  e.preventDefault();
  tasks.push({
    name: tasksInput.value,
    done: false,
    category: selectedCategory,
  });

  renderTasks(tasks, tasksContainer);
});
renderCategories(categories, categoriesContainer, updateSelectedCategory);
renderTasks(tasks, tasksContainer);

//unkown type
let get = (response: unknown) => response;

const logFixed = (v: number) => {
  console.log(v.toFixed());
};

logFixed(2.4);

let value = get(2.4);
if (typeof value === "number") {
  logFixed(value);
}
// logFixed(get("abc"))
