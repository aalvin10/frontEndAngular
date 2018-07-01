import { Component, OnInit, Input } from '@angular/core';
import {Dados} from '../data.model'
import {DataService} from '../data.service'


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html'
})
export class TabelaComponent implements OnInit {

  dados: Dados[]
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dados = this.dataService.buscarDados()
  }

}
