import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  private userService = inject(UserService);

  user = signal<User>({
    Id: -1,
    FirstName: "",
    LastName: "",
    Bio: ""
  });

  ngOnInit() {
    this.userService.updateUser(this.user);
  }
}
