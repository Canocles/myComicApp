import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/heroes/hero/hero.component';

const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'heros',
        component: HeroesComponent
    },
    {
        path: 'heros/search/:name',
        component: HeroesComponent
    },
    {
        path: 'heros/:id',
        component: HeroComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutes {
    useHash: true;
}
