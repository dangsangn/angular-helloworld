import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() onDoubleClick: EventEmitter<ITask> = new EventEmitter();

  handleDeleteTask(task: ITask) {
    this.onDeleteTask.emit(task);
  }

  handleDoubleClick(task: ITask) {
    task.reminder = !task.reminder;
    this.onDoubleClick.emit(task);
  }
}
