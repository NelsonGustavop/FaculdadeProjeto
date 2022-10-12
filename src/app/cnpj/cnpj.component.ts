import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CnpjService } from './cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class cnpjComponent implements OnInit {

   buscacnpj: string = '';
   buscar: boolean = false;

  constructor(
    private cnpjService: CnpjService,
    private messageService: MessageService
  ) { }

  buscarCEP(buscacnpj: any, form: any){
    if(buscacnpj != null && buscacep !== ''){
      this.cnpjService.consultaCnpj(this.buscacnpj).subscribe({
        next: (dados) => {
          console.log(dados);
          this.buscar = true;
          setTimeout(() => {
            this.populaCnpjForm(dados, form);
          }, 100);
        },
        error: (e) => {
          this.resetaCnpjForm(form);
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

  populaCnpjForm(dados: any, formulario: any){
    formulario.form.patchValue({
      logradouro: dados.street,
      cidade: dados.city,
      bairro: dados.neighborhood,
      estado: dados.state
    })
  }

  resetaCnpjForm(formulario: any){
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
