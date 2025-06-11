import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgStyle, NgClass } from '@angular/common'; 

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass],
  template: `
    <div class="input-group" [ngClass]="size">
      <label *ngIf="label" [for]="id" class="input-label">{{ label }} <span *ngIf="required" class="required">*</span></label>
      <input
        [id]="id"
        [type]="type"
        class="input-field"
        [placeholder]="placeholder"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        [ngStyle]="{'min-height': size === 'large' ? '100px' : 'auto'}"
      />
    </div>
  `,
  styles: `
    .input-group { display: flex; flex-direction: column; margin-bottom: 18px; }
    .input-label { font-weight: 500; color: #0041A3; font-family: 'Solomon Sans Normal', Arial, sans-serif; margin-bottom: 6px; }
    .required { color: #CA4949; }
    .input-field {
      border: 1px solid #cfd8dc;
      border-radius: 6px;
      padding: 10px 12px;
      font-size: 1rem;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
      color: #70777B;
      outline: none;
      transition: border 0.2s;
      background: #F4F7F9;
    }
    .input-field::placeholder {
      color: #0041A3;
      opacity: 0.5;
    }
    .input-field:focus {
      border: 1.5px solid #0041A3;
    }
    .large .input-field {
      min-height: 100px;
    }
  `
})
export class CustomInput {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() value = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() size: 'normal' | 'large' = 'normal';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }
}
