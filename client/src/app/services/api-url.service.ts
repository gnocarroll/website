import { inject, Injectable } from '@angular/core';
import { ReadConfigService } from './read-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  config = inject(ReadConfigService);
  apiUrl : string;

  constructor() {
    const apiUrl = this.config.get("ApiUrlHTTP");

    if (apiUrl === null) {
      console.error("Failed to find API url in config");
    }

    this.apiUrl = apiUrl ?? "";
  }

  get(extension: string) : string {
    return this.apiUrl + extension;
  }
}
