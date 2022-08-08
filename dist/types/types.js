export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
        console.log("constructor!");
    }
    //metody nazwa wlasna  funckja wlasna
    logCreationDate(extra) {
        console.log(`task Cretated ${this.createdAt} ${extra || ""}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAL"] = "social";
})(Category || (Category = {}));
