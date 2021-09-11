import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {SummaryComponent} from './pages/summary/summary.component'
import {ListComponent} from './pages/list/list.component';
import { LayoutComponent } from './pages/layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ListComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
