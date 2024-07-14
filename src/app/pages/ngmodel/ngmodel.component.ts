import { Component } from '@angular/core';

export class FormModel{
  fullName!: string;
  address!: string;
  contactNumber!: string;
  email!: string;
  gender!: string;
}

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrl: './ngmodel.component.scss'
})
export class NgmodelComponent {
formModel = new FormModel();

constructor(){

}

submit(){
  console.log(this.formModel);
  this.formModel = this.formModel;
}
}
