import { Component } from '@angular/core';
import { NavController, App, FabContainer } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public app: App) {

  }

  logout() {
    var nav = this.app.getRootNavs()[0];
    nav.setRoot(LoginPage);
    /*this.oauthService.logOut();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();*/
  }

  share(socialNet: string, fab: FabContainer) {
    fab.close();
    console.log("Sharing in", socialNet);
  }

}
