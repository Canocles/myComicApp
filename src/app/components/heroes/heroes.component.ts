import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { HeroesService } from '../../services/heroes.service';
import { Hero } from './hero/hero.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  index: number;
  name: string;

  constructor(public heroesService: HeroesService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['name']) {
        this.heroes = this.heroesService.searchHeroByName(params['name']);
        this.name = params['name'];
      }
      else {
        this.heroes = this.heroesService.getHeroes();
      }
    });
  }

  getHero(id: number) {
    this.router.navigate([`/heros/${id}`]);
  }
}
