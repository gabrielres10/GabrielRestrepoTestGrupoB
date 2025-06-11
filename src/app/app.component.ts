import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MedicionForm } from './components/medicion-form/medicion-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MedicionForm
  ],
  template: `
    <app-medicion-form></app-medicion-form>
  `,
})
export class AppComponent {}