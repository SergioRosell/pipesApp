import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'sergio'
  public nameUpper: string = 'SERGIO'
  public fullName: string = 'sErgIO RosElL'

  public customDate: Date = new Date();

}
