import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { DataviewComponent } from './dataview/dataview.component';
import { HttpClientModule } from '@angular/common/http';
import { SoapComponent } from './soap/soap.component';
import { NgxSoapModule } from 'ngx-soap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent,
    DataviewComponent,
    SoapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSoapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
