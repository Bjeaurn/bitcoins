import {SharedModule} from '../shared/shared.module'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { OverviewComponent } from './overview.component'
import { BitonicService } from './services/bitonic.service'
import {PushNotificationComponent} from 'ng2-notifications/ng2-notifications'

const moduleRoutes: Routes = [
    { path: 'btc', component: OverviewComponent,
        children: [
            { path: '', component: OverviewComponent }
        ]
    },
]
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(moduleRoutes)
    ],
    declarations: [
        PushNotificationComponent,
        OverviewComponent
    ],
    exports: [],
    providers: [
        PushNotificationComponent,
        BitonicService
    ]
})
export class BtcModule {}