import {Routes, RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { BaseModule } from './base/base.module'
import { HttpClient } from './shared/http.client'
import { PageNotFoundComponent } from './shared/pagenotfound.component'
import { SharedModule } from './shared/shared.module'

import { BtcModule } from './btc/btc.module'

const appRoutes: Routes = [
  { path: '', redirectTo: 'btc', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BaseModule,
    BtcModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
