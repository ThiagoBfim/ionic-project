import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',

})
export class FilmeDetalhesPage {

  public filme = {}
  public filmeId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public moovieProvider: MoovieProvider ) {
  }

  ionViewDidEnter() {
      this.filmeId = this.navParams.get("id");
    console.log(this.filmeId);
    this.moovieProvider.getMoovie(this.filmeId).subscribe(
      data => {
        const objRtorno = (data as any);
        this.filme = objRtorno;
      }, error => {
        console.log(error);
      });

  }

}
