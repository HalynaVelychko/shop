import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorsService {

  constructor() { }

  generate(length: number): string {
    return  Math.random().toString(36).substr(2, length);
  }
}
