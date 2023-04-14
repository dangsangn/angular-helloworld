import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [];
  constructor(private tasksService: TaskService) {}

  ngOnInit() {
    this.tasksService
      .getTasks()
      .subscribe((tasks: ITask[]) => (this.tasks = tasks));
  }

  handleDeleteTask(task: ITask) {
    console.log('task:', task);
  }
}
