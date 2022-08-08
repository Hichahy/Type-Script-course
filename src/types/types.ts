export class Task {
  name: string;
  public done: boolean; //defaultowo sa publiczne wiec nie trzeba wpisywac public
  category?: Category;
  private createdAt: Date; //tego juz vsc ci nie podpowie

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = new Date();
    console.log("constructor!");
  }

  //metody nazwa wlasna  funckja wlasna
  logCreationDate(extra?: string) {
    console.log(`task Cretated ${this.createdAt} ${extra || ""}`);
  }
}

export enum Category {
  GENERAL = "general",
  WORK = "work",
  GYM = "gym",
  HOBBY = "hobby",
  SOCIAL = "social",
}
