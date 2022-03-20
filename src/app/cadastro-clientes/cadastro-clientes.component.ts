import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();


  nome: string;
  email: string;
  cpf: string;
  telefone: number;


  //constructor() { }
  cadastrar(){
    const valoresCadastro = {nome: this.nome, email: this.email};
    this.aoTransferir.emit(valoresCadastro)
  }
  ngOnInit(): void {
  }



}
