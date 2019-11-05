import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;
  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              // private location: Location
  ) { }

  ngOnInit() {
    this.getHeroById();
  }

  getHeroById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(heroIt => this.hero = heroIt);
  }
}
