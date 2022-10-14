import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  constructor() {}


  getBaseLocation() {
    const paths: string[] = location.pathname.split('/').splice(1, 1);
    const base: string = (paths && paths[0]) || 'en'; // Default: language
    return '/' + base;
  }

}
