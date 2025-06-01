import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  private projectService = inject(ProjectService);

  projects$ : Observable<Project[]> = this.projectService.getProjects(1);
}
