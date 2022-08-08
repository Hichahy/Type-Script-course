import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    console.log("zmiana na general)");
  } else if (category === Category.GYM) {
    alert("lecisz na silke");
  } else if (category === Category.HOBBY) {
    document.body.style.background = "red";
  } else if (category === Category.WORK) {
    console.log("praca");
    alert("paraca praca!");
    document.body.style.background = "pink";
  } else if (category === Category.SOCIAL) {
    document.body.style.background = "yellow";
  } else {
    const never: never = category;
    console.log(never);
  }
};

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
      handleCategoryChange(c);
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${c}`);
    labelElement.innerText = c;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainer.appendChild(categoryElement);
  });
};
