import { Component, signal, WritableSignal } from '@angular/core';
import { Project } from '../../services/project.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  projects = signal<Project[]>([]);
}
