import {Component} from "@angular/core";


@Component({
  selector: "my-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})

export class TodoComponent{
  toDos = [
    {
      toDOName: "Projet 1",
      todoStatus: true,
      image: "http://placehold.it/150"
    },
    {
      toDOName: "Projet 2",
      todoStatus: false,
      image: "http://placehold.it/150"
    },
    {
      toDOName: "Projet 3",
      todoStatus: true,
      image: "http://placehold.it/150"
    },
    {
      toDOName: "Projet 4",
      todoStatus: false,
      image: "http://placehold.it/150"
    }
  ];

  onChangeStatus(i: number) {
    this.toDos[i].todoStatus = !this.toDos[i].todoStatus;
  }
}
