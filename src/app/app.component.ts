import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppOpenclassroom';

  isAuth = false;

  appareilOne = 'ventilo';
  apparielTwo = 'ordinateur';
  appareilThree = 'frigo';

  constructor() {

    setTimeout (
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  onAllumer() {
    console.log('On allume tout !');
  }

}
