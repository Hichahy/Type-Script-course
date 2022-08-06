export const renderTasks = (tasks, tasksContainer) => {
    tasksContainer.innerHTML = "";
    tasks.forEach((t, index) => {
        const taskElement = document.createElement("li");
        if (t.category) {
            taskElement.classList.add(t.category);
        }
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
