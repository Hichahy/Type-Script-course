import { Task } from "../types/types";

export const renderTasks = (tasks: Task[], tasksContainer: HTMLElement) => {
  tasksContainer.innerHTML = "";
  tasks.forEach((t, index) => {
    const taskElement: HTMLLIElement = document.createElement("li");
    if (t.category) {
      taskElement.classList.add(t.category);
    }
    // taskElement.innerText = t.name;
    // tasksContainer.appendChild(taskElement);
    const labelElement: HTMLLabelElement = document.createElement("label");
    const id: string = `task-${index}`;
    labelElement.innerText = t.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
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


