import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponentComponent } from './test-component/test-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'test', component: TestComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
