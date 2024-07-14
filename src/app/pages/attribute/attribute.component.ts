import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})
export class AttributeComponent {
  myString: any;
  paramString: any;

  add(){
    console.log(this.myString);
    this.paramString = this.myString;
  }
}
