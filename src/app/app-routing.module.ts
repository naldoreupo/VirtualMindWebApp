import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent} from './purchase/purchase.component';
import { QuoteComponent }from './quote/quote.component'

const routes: Routes = [
  { path: 'purchase', component: PurchaseComponent },
  { path: 'quote', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
