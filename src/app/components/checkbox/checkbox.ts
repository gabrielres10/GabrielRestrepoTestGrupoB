import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  template: `
    <label class="checkbox-label">
      <input
        type="checkbox"
        class="checkbox-field"
        [checked]="checked"
        (change)="onChange($event)"
      />
      <span class="checkbox-custom"></span>
      {{ label }}
    </label>
  `,
  styles: `
    .checkbox-label {
      display: flex;
      align-items: center;
      font-weight: 500;
      color: #0041A3;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
      cursor: pointer;
      user-select: none;
      margin-bottom: 18px;
    }
    .checkbox-field {
      display: none;
    }
    .checkbox-custom {
      width: 18px;
      height: 18px;
      border: 2px solid #0041A3;
      border-radius: 4px;
      margin-right: 10px;
      background: #F4F7F9;
      position: relative;
      display: inline-block;
    }
    .checkbox-field:checked + .checkbox-custom {
      background: #0041A3;
      border-color: #0041A3;
    }
    .checkbox-label input:checked + .checkbox-custom::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid #F4F7F9;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      display: block;
    }
  `
})
export class Checkbox {
  @Input() label = '';
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.checkedChange.emit(checked);
  }
}
