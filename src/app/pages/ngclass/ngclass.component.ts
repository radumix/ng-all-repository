import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.scss'
})
export class NgclassComponent {
objectModel = [
  {'value': 'this is your color blue', 'class': 'blue'},
  {'value': 'this is your color green', 'class': 'green'},
  {'value': 'this is your color red', 'class': 'red'},
  {'value': 'this is your color yellow', 'class': 'yellow'},
  {'value': 'this is your color pink', 'class': 'pink'},
];
}
