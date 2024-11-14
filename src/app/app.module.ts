import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListComponent } from './post/list/list.component';
import { DetailComponent } from './post/detail/detail.component';
import { AuthorDetailComponent } from './post/author-detail/author-detail.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

    ListComponent,
    DetailComponent,
    AuthorDetailComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
