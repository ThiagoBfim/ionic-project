import { FilmeDetalhesPage } from './../filme-detalhes/filme-detalhes';
import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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

  public page = 1;
  public lista_filmes = new Array<any>();
  public loading;
  public infiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieProvider: MoovieProvider, public loadingCtrl: LoadingController) {
  }

  abrirCarregando() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando filmes...'
    });

    this.loading.present();
  }
  fecharCarregando() {
    this.loading.dismiss();
  }

  doRefresh(refresher) {
    this.carregarFilmes();

    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregarFilmes(newpage: boolean = false) {
    this.abrirCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const objRtorno = (data as any);
        if (newpage) {
          this.lista_filmes = this.lista_filmes.concat(objRtorno.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = objRtorno.results;
        }
        this.fecharCarregando();
      }, error => {
        console.log(error);
        this.fecharCarregando();
      });
  }

  abirDetalhes(filme) {
    console.log(filme.id);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.page++;
    this.carregarFilmes(true);
  }

}
