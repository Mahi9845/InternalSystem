import { Injectable } from '@angular/core';
import { ChangePasswordComponent } from './Password-module/change-password/change-password.component';
@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: { [key: string]: any } = {};

  constructor() { }

  set(key: string, data: any): void {
    this.cache[key] = data;
  }

  get(key: string): any {
    return this.cache[key];
  }

  remove(key: string): void {
    delete this.cache[key];
  }

  clear(): void {
    this.cache = {};
  }
}

