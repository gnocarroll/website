import { inject, Injectable } from '@angular/core';
import { ReadConfigService } from './read-config.service';

@Injectable({
  providedIn: 'root'
})
export class BackendUrlService {
  private config = inject(ReadConfigService);
  private backendUrl : string;

  constructor() {
    const backendUrl = this.config.get("BackendUrlHTTP");

    if (backendUrl === null) {
      console.error("Failed to find API url in config");
    }

    this.backendUrl = backendUrl ?? "";
  }

  get(extension: string = "") : string {
    return this.backendUrl + extension;
  }
}
