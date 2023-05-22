import { Component } from '@angular/core';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-cache-example',
  template: `
    <div>
      <h1>Data: {{ cachedData }}</h1>
      <button (click)="storeData()">Store Data</button>
    </div>
  `,
})
export class CacheExampleComponent {

  cachedData: any;

  constructor(private cacheService: CacheService) { }

  storeData(): void {
    const data = 'Hello, world!';
    this.cacheService.set('myData', data);
    this.cachedData = data;
  }
}


