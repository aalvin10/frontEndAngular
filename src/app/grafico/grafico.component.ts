import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {Dados} from '../data.model'
import {DataService} from '../data.service'

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html'
})

export class GraficoComponent implements OnInit {
  dados: Dados[]
  chart = [];
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dados = this.dataService.buscarDados()

    let diferencaCapacidadeAtendimentoRealizado: number[] = [];
    let labelsGrafico: string[] = [];
    let corGrafico: string[] = [];
    let borderGrafico: string[] = [];
    for (let mensal of this.dados){
      diferencaCapacidadeAtendimentoRealizado.push((mensal.capacidade - mensal.atendimentoRealizado));
      labelsGrafico.push(mensal.data);
      corGrafico.push('rgba(255, 99, 132, 0.2)');
      borderGrafico.push('rgba(255,99,132,1)');
    }
    console.log(diferencaCapacidadeAtendimentoRealizado)
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labelsGrafico,
        datasets: [{
          label: "Média mensal entre capacidade e atendimento realizado",
          data: diferencaCapacidadeAtendimentoRealizado,
          backgroundColor: corGrafico,
          borderColor: borderGrafico,
          borderWidth: 2
      }]
    },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "top",
          display:true
    
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            position: "left",
            scaleLabel: {
              display: true,
                labelString: "Capacidade - Atendimento Realizado",
            },
            display: true
          }],
        }
      }
    });
  }

}
