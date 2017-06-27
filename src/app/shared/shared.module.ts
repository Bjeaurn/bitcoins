import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {AlertModule} from 'ng2-bootstrap'
import {AlertsComponent} from './alerts/alerts.component'
import {AlertsService} from './alerts.service'

@NgModule({
  declarations: [
      AlertsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    AlertModule,
    AlertsComponent
  ],
  providers: [
      AlertsService
  ]
})
export class SharedModule { }