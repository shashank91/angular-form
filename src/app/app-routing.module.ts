import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishCardComponent } from './wish-card/wish-card.component';


const routes: Routes = [
    {path: 'card', component : WishCardComponent},
  { path: 'card/:username', component: WishCardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
