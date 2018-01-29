import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Routes
import { AppRoutes } from './app.routes';
import { HeroesService } from './services/heroes.service';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { SearchComponent } from './components/heroes/search/search.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
