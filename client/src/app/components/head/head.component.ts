import { Component, inject, signal } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { BackendUrlService } from '../../services/backend-url.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  private userService = inject(UserService);
  private backendUrl = inject(BackendUrlService);

  user = signal<User>({
    Id: -1,
    FirstName: "",
    LastName: "",
    Bio: ""
  });

  faviconUrl = this.backendUrl.get("/favicon225.png")

  ngOnInit() {
    this.userService.updateUser(this.user);
  }
}
