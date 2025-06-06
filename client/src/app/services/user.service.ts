import { inject, Injectable, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReadConfigService } from './read-config.service';
import { ApiUrlService } from './api-url.service';
import { catchError, retry } from 'rxjs';

export interface User {
  Id: number;
  FirstName: string;
  LastName: string;
  Bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly defaultId = 1;
  private http = inject(HttpClient)
  private config = inject(ReadConfigService);
  private apiUrl = inject(ApiUrlService);

  constructor() {
  }

  getUser() {
    let id = Number(this.config.get("UserId") ?? "");

    if (Number.isNaN(id)) id = this.defaultId;

    return this.http.get<User>(this.apiUrl.get(`/user/${id}`))
      .pipe(
        retry(3),
        catchError(error => {
          throw Error(error)
        })
      );
  }
}
