import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { HeroesService } from '../../services/heroes.service';
import { Hero } from './hero/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  index: number;

  constructor(public heroesService: HeroesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  getHero(id: number) {
    this.router.navigate([`/heros/${id}`]);
  }
}
