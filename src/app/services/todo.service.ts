import {Injectable} from "@angular/core";

@Injectable()
export class TodoService{
  today = new Date();
  todos = [
    {
      toDOName: "Projet 1",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModifier: false
    },
    {
      toDOName: "Projet 2",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModifier: false
    },
    {
      toDOName: "Projet 3",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModifier: false
    },
    {
      toDOName: "Projet 4",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModifier: false
    }
  ];

  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  onChangeModif(i: number) {
    this.todos[i].isModifier = !this.todos[i].isModifier;
  }

  getTodo(index: number) {
    if (this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }
}
