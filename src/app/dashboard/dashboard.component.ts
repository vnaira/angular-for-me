import { Component, OnInit } from '@angular/core';
import {HeroService} from '../services/hero.service';
import {Hero} from '../hero';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(her => this.heroes = her.slice(1, 5));
  }
}
