import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ParamInterceptor } from './api.interceptor/param-interceptor';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { HeroService } from './services/hero.service';
import {MessagesService} from './services/messages.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService, {
    provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
