import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero.model';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero;

  constructor(public heroesService: HeroesService,
              private route: ActivatedRoute) {
                
    this.route.params
      .subscribe(
        ( params => {
          this.hero = this.heroesService.getHero(+params['id']);
        })
      );
  }

  ngOnInit() {
  }

}
