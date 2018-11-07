import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="form">
    <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">
    </formly-form>
  </form>
  `
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [{
    key: 'main',
    templateOptions: { label: 'Address' },
    fieldGroup: [
      {
        key: 'incorrect',
        wrappers: ['panel'],
        templateOptions: { label: 'Incorrect example' },
        fieldGroup: [{
          key: 'input-incorrect',
          type: 'input',
          templateOptions: {
            readonly: true,
            type: 'text',
            label: 'Incorrect',
            placeholder: 'Should not be able to trigger an animation'
          },
        }]
      },
      {
        key: 'correct',
        wrappers: ['panel'],
        templateOptions: { label: 'Correct example' },
        fieldGroup: [{
          key: 'correct-input',
          type: 'custom',
          templateOptions: {
            readonly: true,
            type: 'text',
            label: 'Correct',
            placeholder: 'Correctly does not trigger an animation'
          },
        }]
      }
    ]}
  ];
}
