import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeoriComponent } from 'src/lib/neori/neori.component';

const routes: Routes = [
  { path: 'neori', component: NeoriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }