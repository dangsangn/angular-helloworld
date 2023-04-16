import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url_api = 'http://localhost:5000/tasks/';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.url_api);
  }
  deleteTask(id: number): Observable<ITask[]> {
    return this.http.delete<ITask[]>(this.url_api + id);
  }
  updateReminder(task: ITask): Observable<ITask[]> {
    return this.http.patch<ITask[]>(
      this.url_api + task.id,
      {
        reminder: task.reminder,
      },
      httpOptions
    );
  }
  createTask(task: ITask): Observable<ITask[]> {
    return this.http.post<ITask[]>(this.url_api, task, httpOptions);
  }
}
