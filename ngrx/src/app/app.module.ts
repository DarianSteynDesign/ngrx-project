import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {cartProductFeatureKey, reducer} from './reducers/cart-product.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(cartProductFeatureKey, reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
