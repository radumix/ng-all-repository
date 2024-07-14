import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgmodelRoutingModule } from './ngmodel-routing.module';
import { NgmodelComponent } from './ngmodel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgmodelComponent
  ],
  imports: [
    CommonModule,
    NgmodelRoutingModule,
    FormsModule
  ]
})
export class NgmodelModule { }
