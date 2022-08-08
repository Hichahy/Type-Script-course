const handleCategoryChange = (category) => {
    if (category === "general") {
        console.log("zmiana na general)");
    }
    else if (category === "gym") {
        alert("lecisz na silke");
    }
    else if (category === "hobby") {
        document.body.style.background = "red";
    }
    else if (category === "work") {
        console.log("praca");
        alert("paraca praca!");
        document.body.style.background = "pink";
    }
    else if (category === "social") {
        document.body.style.background = "yellow";
    }
    else {
        const never = category;
        console.log(never);
    }
};
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
            handleCategoryChange(c);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${c}`);
        labelElement.innerText = c;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainer.appendChild(categoryElement);
    });
};
