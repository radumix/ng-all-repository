import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.scss'
})
export class NgswitchComponent {
pair: any = [];

pickPair(){
  const numbers = [1, 2, 3, 4, 5];
  const shuffled = numbers.sort(() => 0.5 - Math.random());
  let result = shuffled.slice(0,2);
  console.log(result, 'remark');
  this.pair=result;
}
}
