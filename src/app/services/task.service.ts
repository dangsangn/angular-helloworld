import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url_api = 'http//localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.url_api);
  }
  deleteTask(id: number): Observable<ITask[]> {
    return this.http.delete<ITask[]>(this.url_api + id);
  }
}
