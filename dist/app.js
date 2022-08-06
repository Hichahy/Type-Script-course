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
const tasksContainer = document.querySelector("#tasks3");
const tasksInput = document.querySelector("#input3");
const tasksButton = document.querySelector("#button3");
//array in practice
// const tasks: string[] = ["wyrzucic śmieci", "umyć zęby", "napraw kod"];
//object in practice
const tasks = [
    { name: "wyrzucic śmieci", done: false },
    { name: "umyć zęby", done: true },
    { name: "napraw kod", done: false },
];
const renderTasks = () => {
    tasksContainer.innerHTML = "";
    tasks.forEach((t, index) => {
        const taskElement = document.createElement("li");
        // taskElement.innerText = t.name;
        // tasksContainer.appendChild(taskElement);
        const labelElement = document.createElement("label");
        const id = `task-${index}`;
        labelElement.innerText = t.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = t.name;
        checkboxElement.id = id;
        checkboxElement.addEventListener("change", () => {
            t.done = !t.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainer.appendChild(taskElement);
        checkboxElement.checked = t.done;
    });
};
tasksButton.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.push({ name: tasksInput.value, done: false });
    renderTasks();
});
renderTasks();
