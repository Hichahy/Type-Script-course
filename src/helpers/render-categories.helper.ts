import { Category } from "../types/types";

export const renderCategories = (
  categories: Category[],
  categoriesContainer: HTMLElement,
  //   selectedCategory: Category
  inputChangeCallback: (c: Category) => void
) => {
  categories.forEach((c) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = c;
    radioInputElement.id = `category-${c}`;
    radioInputElement.addEventListener("change", () => {
      inputChangeCallback(c);
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${c}`);
    labelElement.innerText = c;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainer.appendChild(categoryElement);
  });
};
