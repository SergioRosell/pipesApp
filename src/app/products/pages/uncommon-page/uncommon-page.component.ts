import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name:string = 'Sergio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap={
    'male': 'invitarlo',
    'female': 'invitarla,'
  }

  changeClient():void{

    this.name= 'Melissa'
    this.gender= 'female'
  }

  // i18n Plural

  public clientes: string[]=['Maria','Pedro',
                              'Fernando','Hernando','Eduardo',
                              'Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clientes.pop();
  }
  addClient():void{
    this.clientes.push();
  }

  //KeyValue Pipe
  public person= {
    name: 'Sergio',
    age: 24,
    address: 'Madrid'
  }


  //Async pipe
  public myObersvableTimer: Observable<number> = interval(2000);


  public promiseValue: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.');
        console.log('Tenemos data en la promesa.');
    }, 3500);
  })


}
