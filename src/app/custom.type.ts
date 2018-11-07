import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/material/form-field';

@Component({
  selector: 'app-formly-field-mat-input',
  template: `
    <input
      matInput
      [id]="id"
      [type]="type || 'text'"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [placeholder]="to.placeholder"
      [readonly]="to.readonly">
  `,
})
export class FormlyFieldInput extends FieldType implements OnInit {
  @ViewChild(MatInput) formFieldControl: MatInput;

  get type() {
    return this.to.type || 'text';
  }
}
