import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() article: Article;
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Article1', 'http://angular.io', 10),
      new Article('Article1', 'http://angular.io', 10),
      new Article('Article1', 'http://angular.io', 10)
    ];
    // this.article = new Article('Article1', 'http://angular.io', 10);
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
