import { HttpClient } from '@angular/common/http';
import { inject, Injectable, WritableSignal } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { ApiUrlService } from './api-url.service';

export interface Technology {
  Id: number;
  Name: string;
}

export interface Project {
  Id: number;
  Name: string;
  Description: string;
  Technologies: Technology[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = inject(ApiUrlService);
  private http = inject(HttpClient);

  constructor() { }

  getProjects(userId: number) {
    return this.http.get<Project[]>(this.apiUrl.get(
        `/projects?${Object.keys({userId})[0]}=${userId}`
      ))
      .pipe(
        retry(3),
        catchError(error => {
          throw Error(error)
        })
      );
  }
}
