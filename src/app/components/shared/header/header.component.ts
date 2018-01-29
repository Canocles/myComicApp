import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public herosService: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }

  searchHeroByName(name: string) {
    this.router.navigate(['heros/search', name]);
  }
}
