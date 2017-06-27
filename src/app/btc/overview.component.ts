import { BitonicService } from './services/bitonic.service'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core'
import { PushNotificationComponent } from "ng2-notifications/ng2-notifications"

@Component({
    selector: 'app-home',
    template: `
    <table class="table">
        <tr>
            <td align="right">Kopen:</td>
            <td><i class="fa fa-eur"></i> {{ buyPrice }} / 1 <i class="fa fa-btc"></i></td>
        </tr>
        <tr>
            <td></td>
            <td>Alert me at: <input class="form-control" [(ngModel)]="lowerThan" /></td>
        </tr>
    </table>

    <push-notification #notification
  title="BTC Alert!"
  [body]="'Bitcoin prices dropped to &euro;'+buyPrice"
  icon="http://www.canbike.org/public/images/030114/Bitcoin_Logo_Vertical.png"
  closeDelay="60000">
</push-notification>
    `
})
export class OverviewComponent implements OnInit, OnDestroy {
    @ViewChild('notification') notification: PushNotificationComponent

    private subscriptions: Subscription[] = []

    public buyPrice: number
    public sellPrice: Observable<number>

    public lastBuyPrice: any
    public lowerThan: number

    constructor(private bitonicService: BitonicService) {
        this.lowerThan = 0
    }

    ngOnInit() {
        const subscription = this.createBuyInterval()
            .subscribe(n => {
                console.log(n)
                this.buyPrice = n.eur
                if(n.eur <= this.lowerThan) {
                    this.notification.show()
                }
                return n
            })
        this.subscriptions.push(subscription)
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe())
    }

    createBuyInterval(): Observable<any> {
        return this.bitonicService.getBuyPrice()
            .expand(_ => Observable.of({})
                .delay(10000)
                .switchMap( () => this.bitonicService.getBuyPrice() )
            )
            .share()
    }
}