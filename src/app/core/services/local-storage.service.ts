import { InjectionToken } from '@angular/core';

export class LocalStorageService {

  constructor() { }

  setElementToLocalStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value)
  }

  getItemFromLocalStorage(key: string): string | null {
    return window.localStorage.getItem(key);
  }
}

export const LocalStorageToken = new InjectionToken('StorageToken')
