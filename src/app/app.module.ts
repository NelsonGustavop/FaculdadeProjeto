import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './primeng.module';
import { CepComponent } from './cep/cep.component';
import { CnpjComponent } from './cnpj/cnpj.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './cep/cep.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    CnpjComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimeNGModule
  ],
  providers: [
    CepService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
