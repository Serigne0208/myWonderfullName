import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms'; // Importer FormsModule ici
import { ListComponent } from './post/list/list.component';
import { DetailComponent } from './post/detail/detail.component';
import { AuthorDetailComponent } from './post/author-detail/author-detail.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ResetInputComponent } from './reset-input/reset-input.component';
import { MyLibService } from 'my-lib';
import { AddressInputComponent } from '../../projects/my-lib/src/lib/address-input/address-input.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    DetailComponent,
    AuthorDetailComponent,
    ResetInputComponent,
   // AddressInputComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  MyLibService,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
