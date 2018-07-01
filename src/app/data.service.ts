import { Injectable } from '@angular/core';
import { Dados } from '../app/data.model'

@Injectable()
export class DataService {
  dados: Dados[] = [
    {
      data: "Janeiro",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Fevereiro",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Março",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Abril",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Maio",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Junho",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Julho",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Agosto",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Setembro",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Outubro",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Novembro",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    },
    {
      data: "Dezembro",
      demanda: Math.floor(Math.random() * 100) + 1,
      capacidade: Math.floor(Math.random() * 150) + 1,
      atendimentoPlanejado: Math.floor(Math.random() * 130) + 1,
      atendimentoRealizado: Math.floor(Math.random() * 80) + 1,
      desvio: Math.floor(Math.random() * 15) + 1
    }
  ]

  constructor() { }
  buscarDados(): Dados[]{
    return this.dados;
  }
}
