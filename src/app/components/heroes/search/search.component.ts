import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  name: string = "";

  constructor(public herosService: HeroesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          this.heroes = this.herosService.searchHeroByName(params['name']);
          this.name = params['name'];
        }
      );
  }

}
