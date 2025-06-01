import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent  {
  private userService = inject(UserService);
  private title = inject(Title);

  user = signal<User>({
    Id: -1,
    FirstName: '',
    LastName: '',
    Bio: ''
  });
  
  constructor() {
    this.userService.getUser().subscribe((user) => {
      this.user.set(user);
    });

    effect(() => {
      this.title.setTitle(`${this.user().FirstName} ${this.user().LastName}`);
    })
  }
}
