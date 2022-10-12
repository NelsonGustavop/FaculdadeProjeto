import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

   buscacep: string = '';
   buscar: boolean = false;

  constructor(
    private cepService: CepService,
    private messageService: MessageService
  ) { }

  buscarCEP(buscacep: any, form: any){
    if(buscacep != null && buscacep !== ''){
      this.cepService.consultaCEP(buscacep).subscribe({
        next: (dados) => {
          console.log(dados);
          this.buscar = true;
          setTimeout(() => {
            this.populaCEPForm(dados, form);
          }, 100);
        },
        error: (e) => {
          this.resetaCEPForm(form);
          console.log(e);
          this.messageService.add({
            severity: 'error',
            summary: 'Atenção',
            detail: 'Erro ao buscar cep!'
          });
        }
      })
    }
  }

  populaCEPForm(dados: any, formulario: any){
    formulario.form.patchValue({
      logradouro: dados.street,
      cidade: dados.city,
      bairro: dados.neighborhood,
      estado: dados.state
    })
  }

  resetaCEPForm(formulario: any){
    formulario.form.patchValue({
      logradouro: null,
      cidade: null,
      bairro: null,
      estado: null
    })
  }

  ngOnInit() {
  }

}
