import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReadConfigService } from '../services/read-config.service';
import { catchError, pipe, retry } from 'rxjs';

interface User {
  Id: number;
  FirstName: string;
  LastName: string;
  Bio: String;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  private config = inject(ReadConfigService);

  title = 'client';
  users : User[] = []

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const apiUrl = this.config.get("ApiUrl");

    if (apiUrl === null) {
      console.error("Failed to find API url in config");
      return;
    }

    this.http.get<User[]>(apiUrl ?? "" + "/api/user")
      .pipe(
        retry(3),
        catchError(error => {
          throw Error("Request failed")
        })
      )
      .subscribe(users => {
        this.users = users;
      });
  }
}
