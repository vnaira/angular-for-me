import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<Article> {
    return this.http.get<Article>(this.postUrl);
  }
}
