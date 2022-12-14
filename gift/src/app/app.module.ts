import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { WalletsComponent } from './wallets/wallets.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { ShareComponent } from './share/share.component';
import { BalanceComponent } from './balance/balance.component';
import { SummaryComponent } from './summary/summary.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkComponent } from './work/work.component';
import { FriendComponent } from './friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    PurchasesComponent,
    WalletsComponent,
    RedemptionComponent,
    ShareComponent,
    BalanceComponent,
    SummaryComponent,
    ContactsComponent,
    SessionsComponent,
    SettingsComponent,
    WorkComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
