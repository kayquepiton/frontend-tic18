import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
