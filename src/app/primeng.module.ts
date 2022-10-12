import { NgModule } from "@angular/core";
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ToastModule
  ]
})
export class PrimeNGModule {}
