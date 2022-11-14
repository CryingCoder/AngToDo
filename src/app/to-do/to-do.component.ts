import { Component, OnInit} from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

    toDos: ToDo[] = [
        { task: 'Laundry', completed: false },
        { task: 'Grocery Shopping', completed: true },
        { task: 'Dishes', completed: true },
        { task: 'Walk Cats', completed: false },
        { task: 'Take out Trash', completed: false },
    ];
    filteredToDos: ToDo[] = [];

    filterInput: string = '';
    toDoInput: string = '';
  
    constructor() { }
  
    ngOnInit(): void {
      this.filteredToDos = this.toDos;
    }
  
    addTask(): void {
      if (this.toDoInput !== '') {
        this.toDos.push({ task: this.toDoInput, completed: false });
        this.toDoInput = '';
      }
      this.filterToDos();
    }
  
    removeTask(task: string): void {
      const index: number = this.toDos.findIndex(element => element.task === task);
      this.toDos.splice(index, 1);
      this.filterToDos();
    }
  
    completeTask(task: string): void {
      const index: number = this.toDos.findIndex(element => element.task === task);
      this.toDos[index].completed = true;
      this.filterToDos();
    }
    
    filterToDos(): void {
      this.filteredToDos = this.toDos.filter(toDo => toDo.task.includes(this.filterInput));
    }
  
  }