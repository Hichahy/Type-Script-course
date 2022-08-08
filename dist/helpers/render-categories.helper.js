export const renderCategories = (categories, categoriesContainer, 
//   selectedCategory: Category
inputChangeCallback) => {
    categories.forEach((c) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = c;
        radioInputElement.id = `category-${c}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(c);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${c}`);
        labelElement.innerText = c;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainer.appendChild(categoryElement);
    });
};
