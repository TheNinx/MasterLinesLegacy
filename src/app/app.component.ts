import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MasterLinesLegacy';

  private cadastro: any[] = []

  cadastrar($event){
    console.log('aaaaa');
     this.cadastro.push($event)
  }

}
