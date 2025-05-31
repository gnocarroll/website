import { Injectable } from '@angular/core';

import * as raw from '../../assets/config.json'

const config : Record<string, string> = raw; 

@Injectable({
  providedIn: 'root'
})
export class ReadConfigService {
  constructor() { }

  get(key: string) : string | null {
    if (!(key in config)) return null;

    return config[key];
  }
}
