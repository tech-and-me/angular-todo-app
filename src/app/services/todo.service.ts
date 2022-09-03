import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "./../model/Todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn Typescript",
        isCompleted: true,
        date:new Date()
      },
      {
        id: '222',
        title: "Learn Python",
        isCompleted: false,
        date:new Date()
      },
      {
        id: '333',
        title: "Learn ASP.Net",
        isCompleted: false,
        date:new Date()
      }
    ]
  }

  getTodos(){
    return of(this.todos)
  }

  addTodo(todo:Todo){
    todo.title?this.todos.push(todo): alert("Input field cant be blank !")
  }

  changeStatus(todo:Todo){
    this.todos.map(todoItem => todoItem.id === todo.id && (todoItem.isCompleted = !todoItem.isCompleted));
  }

  deleteTodo(todo:Todo){
    const indexOfTodo = this.todos.findIndex(
      (currentObj => currentObj.id === todo.id)
    );
    this.todos.splice(indexOfTodo,1);
  } 
}
