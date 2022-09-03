import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/Todo';
import {v4 as uuid} from "uuid";
import { TodoService } from './../../services/todo.service';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle:string = "";
  

  constructor(private todoService:TodoService) {
    
  }

  ngOnInit(): void {
  }
  handleAdd(){
    const newTodo:Todo = {
      id: uuid(),
      title:this.todoTitle,
      date:new Date(),
      isCompleted:false
    }
    this.todoService.addTodo(newTodo);
    this.todoTitle = "";
  }

}
