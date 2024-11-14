import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListComponent } from './post/list/list.component';
import { DetailComponent } from './post/detail/detail.component';
import { AuthorDetailComponent } from './post/author-detail/author-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: ListComponent },
  { path: 'posts/:id', component: DetailComponent }, 
  { path: 'posts/authors/:id', component: AuthorDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Supprimez DashboardComponent ici
  exports: [RouterModule]
})
export class AppRoutingModule { }
