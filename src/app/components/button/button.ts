import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [type]="type"
      [ngClass]="[variant]"
      class="custom-btn"
      (click)="onClick($event)"
    >
      {{ label }}
    </button>
  `,
  styles: `
    .custom-btn {
      width: 100%;
      padding: 12px 0;
      border-radius: 10px;
      font-size: 1.1rem;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
      font-weight: 600;
      border: none;
      cursor: pointer;
      margin-bottom: 10px;
      transition: background 0.2s, color 0.2s;
    }
    .primary {
      background: #0041A3;
      color: #F4F7F9;
    }
    .primary:hover {
      background: #003580;
    }
    .secondary {
      background: none;
      color: #CA4949;
      border: none;
      margin-top: 0;
    }
    .secondary:hover {
      text-decoration: underline;
      background: none;
    }
  `
})
export class Button {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output() btnClick = new EventEmitter<Event>();

  onClick(event: Event) {
    this.btnClick.emit(event);
  }
}
