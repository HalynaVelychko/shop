import { ConfigModel } from '../models/config-option.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
person: ConfigModel = {
   id: 1,
   login: 'person1',
   email: 'person1@email.com'
  }
  constructor() { }

  setConfig(obj: Partial<ConfigModel>): void{
    this.person = {...this.person, ...obj}
  }

  getCConfig(): ConfigModel {
    return this.person;
  }
}
