import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule } from '@angular/material';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppComponent } from './app.component';
import { FormlyFieldInput } from './custom.type';
import { PanelWrapperComponent } from './panel-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelWrapperComponent,
    FormlyFieldInput
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Material
    MatInputModule,
    MatCardModule,
    // Formly
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'custom',
          component: FormlyFieldInput,
          wrappers: ['form-field']
        }
      ],
      wrappers: [
        {
          name: 'panel',
          component: PanelWrapperComponent
        }
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
