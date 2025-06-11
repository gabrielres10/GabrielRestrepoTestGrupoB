import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle],
  template: `
    <div class="dropdown-group">
      <label *ngIf="label" [for]="id" class="dropdown-label">{{ label }} <span *ngIf="required" class="required">*</span></label>
      <div class="dropdown-wrapper">
        <select
          [id]="id"
          class="dropdown-field"
          [required]="required"
          [value]="value"
          (change)="onChange($event)"
          (focus)="isOpen = true"
          (mousedown)="isOpen = true"
          (blur)="isOpen = false"
          (keydown)="onKeyDown($event)"
        >
          <option *ngFor="let option of options" [value]="option.value" [ngStyle]="{'color': '#0041A380'}">{{ option.label }}</option>
        </select>
        <span class="dropdown-arrow" [class.open]="isOpen">
          <svg width="28" height="28" viewBox="0 0 28 28">
            <polyline points="7,11 14,18 21,11" stroke="#0041A3" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  `,
  styles: `
    .dropdown-group { display: flex; flex-direction: column; margin-bottom: 18px; }
    .dropdown-label { font-weight: 500; color: #0041A3; font-family: 'Solomon Sans Normal', Arial, sans-serif; margin-bottom: 6px; }
    .required { color: #CA4949; }
    .dropdown-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }
    .dropdown-field {
      border: 1px solid #cfd8dc;
      border-radius: 6px;
      padding: 10px 36px 10px 12px;
      font-size: 1rem;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
      color: #0041A380;
      outline: none;
      transition: border 0.2s;
      background: #F4F7F9;
      appearance: none;
      width: 100%;
    }
    .dropdown-field:focus {
      border: 1.5px solid #0041A3;
    }
    .dropdown-arrow {
      position: absolute;
      right: 14px;
      pointer-events: none;
      display: flex;
      align-items: center;
      transition: transform 0.2s;
    }
    .dropdown-arrow.open {
      transform: rotate(180deg);
    }
  `
})
export class Dropdown {
  @Input() label = '';
  @Input() required = false;
  @Input() value = '';
  @Input() id = '';
  @Input() options: { label: string; value: string }[] = [];
  @Output() valueChange = new EventEmitter<string>();

  isOpen = false;

  onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      this.isOpen = true;
    }
  }

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(value);
    // Cierra el dropdown después de seleccionar
    this.isOpen = false;
  }
}
