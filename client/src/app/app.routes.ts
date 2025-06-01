import { Routes } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: UserHomeComponent,
        title: ''
    },
    {
        path: 'projects',
        component: ProjectsPageComponent,
        title: 'Projects'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
];