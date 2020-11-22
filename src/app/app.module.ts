import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteComponent } from './quote/quote.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PurchaseEffects } from './store/effects/purchase.effects';
import { PurchaseService } from './service/purchase.service';
import { QuoteService } from './service/quote.service';
import { QuoteEffects } from './store/effects/quote.effects';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    StoreModule.forRoot({
      Purchase :reducers.purchase,
      Quote : reducers.quote
    }),      
    EffectsModule.forRoot([PurchaseEffects,QuoteEffects])
  ],
  providers: [PurchaseService,QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
