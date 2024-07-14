import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeRoutingModule } from './attribute-routing.module';
import { AttributeComponent } from './attribute.component';
import { StringComponent } from '../../components/string/string.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AttributeComponent,
    StringComponent
  ],
  imports: [
    CommonModule,
    AttributeRoutingModule,
    FormsModule
  ]
})
export class AttributeModule { }
