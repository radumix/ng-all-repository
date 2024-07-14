import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgifRoutingModule } from './ngif-routing.module';
import { NgifComponent } from './ngif.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgifComponent
  ],
  imports: [
    CommonModule,
    NgifRoutingModule,
    FormsModule
  ]
})
export class NgifModule { }
