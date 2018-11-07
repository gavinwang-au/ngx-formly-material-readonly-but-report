import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper-panel',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>{{ to.label }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ng-container #fieldComponent></ng-container>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px 20px 0 20px;
    }
  `]
})
export class PanelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
