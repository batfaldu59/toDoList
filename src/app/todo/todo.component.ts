import {Component, OnInit} from "@angular/core";
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";


@Component({
  selector: "my-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})

export class TodoComponent implements OnInit{
  todos;
  today;
  constructor(private todoService: TodoService,
              private route: Router) {
  }

  ngOnInit() {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;
  }

  onChangeStatus(i: number) {
    this.todoService.onChangeStatus(i);
  }

  onChangeModif(i: number) {
    this.todoService.onChangeModif(i);
  }

  onView(id: number) {
    this.route.navigate(["single-todo", id]);
  }
}
