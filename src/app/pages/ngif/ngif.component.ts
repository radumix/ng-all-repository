import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss'
})
export class NgifComponent {
input = "";
selector = "";
blue = 'blue';
green = 'green';
red = 'red';
yellow = 'yellow';
pink = 'pink';

constructor(){}

showBox(){
  this.input = this.selector;
}

}
