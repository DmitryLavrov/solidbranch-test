import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {SummaryComponent} from './pages/summary/summary.component'
import {ListComponent} from './pages/list/list.component'
import {LayoutComponent} from './pages/layout/layout.component'

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: SummaryComponent},
      {path: 'navigator', component: ListComponent},
      {path: '**', redirectTo: ''}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
