import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit(): void {
    this.initializedVeem(300);
  }

  initializedVeem(timeout: number): void {
    setTimeout(() => {
      // @ts-ignore
      new Veem.WebSDK({
        name: 'sendPayment',
        environment: 'sandbox',
        clientId: 'sandboxsendpayment-l0qwppPOyW',

        target: `#veem-container`,
        preset: {
          accountId: 67744,
          referenceId: '44cbf675-a584-4fc6-b32f-29c2ed8c864e',
          payerAmount: 500,
          payerCurrencyCode: 'USD',
        },
        utm: {
          source: 'magaya',
          medium: 'partner',
          campaign: 'magaya_sdk',
        },
      });
    }, timeout);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
