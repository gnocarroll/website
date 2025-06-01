import { inject, Injectable } from '@angular/core';
import { BackendUrlService } from './backend-url.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  backendUrl = inject(BackendUrlService);
  apiUrl : string = this.backendUrl.get("/api");

  constructor() {}

  get(extension: string = "") : string {
    return this.apiUrl + extension;
  }
}
