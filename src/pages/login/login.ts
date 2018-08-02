import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this.error = ""
    if (this.username == "admin" && this.password == "admin")
    {
      this.navCtrl.setRoot(TabsPage);
    }
    else
    {
      this.error = "usuario o contraseña incorrectos";
    }
    /*this.oauthService.createAndSaveNonce().then(nonce => {
      const authClient = new OktaAuth({
        clientId: this.oauthService.clientId,
        redirectUri: this.oauthService.redirectUri,
        url: this.oauthService.issuer
      });
      authClient.signIn({
        username: this.username,
        password: this.password
      }).then((response) => {
        if (response.status === 'SUCCESS') {
          authClient.token.getWithoutPrompt({
            nonce: nonce,
            responseType: ['id_token', 'token'],
            sessionToken: response.sessionToken,
            scopes: this.oauthService.scope.split(' ')
          })
            .then((tokens) => {
              // oauthService.processIdToken doesn't set an access token
              // set it manually so oauthService.authorizationHeader() works
              localStorage.setItem('access_token', tokens[1].accessToken);
              this.oauthService.processIdToken(tokens[0].idToken, tokens[1].accessToken);
              this.navCtrl.push(TabsPage);
            })
            .catch(error => console.error(error));
        } else {
          throw new Error('We cannot handle the ' + response.status + ' status');
        }
      }).fail((error) => {
        console.error(error);
        this.error = error.message;
      });
    });*/
  }

}
