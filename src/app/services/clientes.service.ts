import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private listaClientes: any[] = [];


  constructor() {
    this.listaClientes = []
  }




  get clientes(){
    return this.listaClientes;
  }

  adicionar(clientes: any){
    this.listaClientes.push(clientes)
  }

}
