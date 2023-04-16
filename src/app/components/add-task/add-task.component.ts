import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  handleSubmit() {
    if (!this.text) {
      alert('Type text please');
      return;
    }

    const task: ITask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
