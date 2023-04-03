import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {CommonModule} from '@angular/common';
import { ListRapportComponent} from "./list-rapport/list-rapport.component";
import {HomeComponent} from "./home/home.component";
import {RapportComponent} from "./rapport/rapport.component";
import {NewRapportComponent} from "./new-rapport/new-rapport.component";

const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'ListeRapport', component: ListRapportComponent },
    { path: 'rapport/:id', component: RapportComponent },
  { path: 'new-rapport', component: NewRapportComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
