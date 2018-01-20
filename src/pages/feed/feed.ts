import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public feed = {
    titulo: "Marty McFly",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qtdLikes: 12,
    qtdComments: 3,
    timeComment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const objRtorno = (data as any);
        this.lista_filmes = objRtorno.results;
        console.log(this.lista_filmes);
    }, error => {
      console.log(error);
    });
  }

}
