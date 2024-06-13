import { Routes } from '@angular/router';
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {path: 'crisis', component: CrisisListComponent},
  {path: 'heroes', component: HeroesListComponent},
  { path: '**', component: NotFoundComponent },
];
