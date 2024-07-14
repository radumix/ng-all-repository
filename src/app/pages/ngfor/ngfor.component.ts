import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
modelList = [
  {'value': 'blue', 'description': 'this is your blue user!'},
  {'value': 'green', 'description': 'this is your green user!'},
  {'value': 'red', 'description': 'this is your red user!'},
  {'value': 'yellow', 'description': 'this is your yellow user!'},
  {'value': 'pink', 'description': 'this is your pink user!'},
];

constructor(){}

getList(){
  this.modelList = [
    {'value': 'blue', 'description': 'this is your blue user!'},
    {'value': 'green', 'description': 'this is your green user!'},
    {'value': 'red', 'description': 'this is your red user!'},
    {'value': 'yellow', 'description': 'this is your yellow user!'},
    {'value': 'pink', 'description': 'this is your pink user!'},
  ];
}

clearList(){
  this.modelList = [];
}
}
