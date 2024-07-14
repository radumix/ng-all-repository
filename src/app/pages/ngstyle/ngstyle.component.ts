import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.scss'
})
export class NgstyleComponent {
objectStyle = [
  {'color': 'blue', 'style':
  {'background-color': 'blue', 'width': '90%', 'height': '100px', 'font-size': '30px', 'text-align': 'center' }},
  {'color': 'green', 'style':
  {'background-color': 'green', 'width': '80%', 'height': '100px', 'font-size': '30px', 'text-align': 'center' }},
  {'color': 'red', 'style': 
  {'background-color': 'red', 'width': '60%', 'height': '100px', 'font-size': '30px', 'text-align': 'center' }},
  {'color': 'yellow', 'style': 
  {'background-color': 'yellow', 'width': '50%', 'height': '100px', 'font-size': '30px', 'text-align': 'center' }},
  {'color': 'pink', 'style': 
  {'background-color': 'pink', 'width': '70%', 'height': '100px', 'font-size': '30px', 'text-align': 'center' }},
];
}
