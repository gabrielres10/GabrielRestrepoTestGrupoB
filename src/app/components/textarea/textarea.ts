import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="textarea-group">
      <label *ngIf="label" [for]="id" class="textarea-label">{{ label }} <span *ngIf="required" class="required">*</span></label>
      <textarea
        [id]="id"
        class="textarea-field"
        [placeholder]="placeholder"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        rows="4"
        style="resize: none;"
      ></textarea>
    </div>
  `,
  styles: `
    .textarea-group { display: flex; flex-direction: column; margin-bottom: 18px; }
    .textarea-label { font-weight: 500; color: #0041A3; font-family: 'Solomon Sans Normal', Arial, sans-serif; margin-bottom: 6px; }
    .required { color: #CA4949; }
    .textarea-field {
      border: 1px solid #cfd8dc;
      border-radius: 6px;
      padding: 10px 12px;
      font-size: 1rem;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
      color: #70777B;
      outline: none;
      transition: border 0.2s;
      background: #F4F7F9;
      min-height: 80px;
      max-height: 160px;
    }
    .textarea-field::placeholder {
      color: #0041A3;
      opacity: 0.5;
    }
    .textarea-field:focus {
      border: 1.5px solid #0041A3;
    }
  `
})
export class Textarea {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() value = '';
  @Input() id = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.valueChange.emit(value);
  }
}
