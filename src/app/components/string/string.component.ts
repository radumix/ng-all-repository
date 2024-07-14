import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrl: './string.component.scss'
})
export class StringComponent {
  @Input() paramString!: string;

  
}
