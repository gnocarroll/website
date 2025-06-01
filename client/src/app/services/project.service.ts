import { inject, Injectable, WritableSignal } from '@angular/core';

interface Technology {
  Id: number;
  Name: string;
}

interface Project {
  Id: number;
  Name: string;
  Description: string;
  Technologies: Technology[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpService);

  constructor() { }

  updateProjects(userId: number, projects: WritableSignal<Project[]>) {
    this.http.get<Project[]>
  }
}
