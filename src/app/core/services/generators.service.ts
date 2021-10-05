import { Injectable } from '@angular/core';
import { genId } from './gen-ID.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorsService {
  start: number = 0;

  constructor() { }

  generate(length: number): string {
    return  Math.random().toString(36).substr(2, length);
  }

  getNewId(): any {
    return genId(this.start);
  }
}
