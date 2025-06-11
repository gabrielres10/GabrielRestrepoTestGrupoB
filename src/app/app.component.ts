import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <h1>TEST EFICACIA LIBRARY</h1>
  `,
})
export class AppComponent {}