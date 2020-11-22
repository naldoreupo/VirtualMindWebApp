import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuoteService } from '../service/quote.service';
import * as fromRoot from '../store/reducers/index'
import { GetQuoteAction, GetQuotesAction, GetQuoteSuccessAction } from '../store/actions/quote.action';
import { AppState } from '../store/state/AppState';
import { Quote } from '../store/models/Quote';


export interface ExchangeRate {
  currencyCode: string;
  buyingRate: number;
  sellingRate: number;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  displayedColumns: string[] = ['currencyCode',  'buyingRate', 'sellingRate'];
  currencyCodes: string[] = ['BRL','USD'];
  dataSource = new MatTableDataSource<ExchangeRate>();

  constructor(public store: Store<AppState>) { 
    store.select<Quote>((state: any) => state) 
               .subscribe((completeState: any)  => {
                let quotesExchage = completeState.Quote.QuotesExchage;
                if (quotesExchage){
                  this.dataSource.data = quotesExchage;
               };               
              })}

  ngOnInit(): void {
    this.RefreshQuote();
  }

  RefreshQuote(){
    this.store.dispatch( new GetQuotesAction());
  }
}
