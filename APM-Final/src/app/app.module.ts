import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { MockDataComponent } from './mock-data/mock-data.component';
import { TsfFooterComponent } from './tsf-footer/tsf-footer.component';
//AddDeveloper
import { AddDeveloper } from 'app/ch7/multi-page-template/add_developer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MockDataComponent,
    TsfFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: 'mock-data', component: MockDataComponent },
        { path  'add-developer', component: AddDeveloper }
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
