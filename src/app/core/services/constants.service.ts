import { InjectionToken } from '@angular/core';

export interface  Constans {
  App: string,
  Ver: string,
  API_URL: string,
}


export const constans: Constans = { App: "TaskManager", Ver: "1.0", API_URL: "http://..." };
export const constService =  new InjectionToken<Constans>('ConstansService');
