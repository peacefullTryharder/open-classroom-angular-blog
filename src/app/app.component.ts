import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Array<Post> = new Array<Post>();

  constructor() {}

  ngOnInit() {

    this.posts.push(new Post(
      "Premier article", 
      "Ce billet de blog ne sert à rien. En tout cas, un Lorem Ipsum generator m'aurait bien aidé à éviter de taper tout ce texte pour rien. Heureusement que j'écrit vite. En tout cas n'hésitez pas à mettre un pouce bleu !", 
      0
      ));

    this.posts.push(new Post(
      "Deuxième article", 
      "Merci à tous d'être venu assister à mon blog, car c'était vraiment un super spectacle. Love à tous et surtout merci.",
      4));

    this.posts.push(new Post(
      "Encore et toujours un article", 
      "Si vous saviez à quel point vous avez tord... C'est quelque chose !!", 
      -2));

  }

}
