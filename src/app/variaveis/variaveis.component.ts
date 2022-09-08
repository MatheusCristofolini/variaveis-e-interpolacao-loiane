import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  templateUrl: './variaveis.component.html',
  styleUrls: ['./variaveis.component.scss']
})
export class VariaveisComponent implements OnInit {

  nomeCompleto:   string   | undefined;
  dataNascimento: Date     | undefined;
  minhaIdade:     number   | undefined;
  valorHora:      number   = 0;
  horasTrabalhadas: number = 0;
  estouEstudando: boolean  | undefined;
  salarioTotal: number     | undefined;
  listaDeLivros: string[] = [];

  constructor() {

    this.nomeCompleto     = "Matheus Cristofolini";
    this.dataNascimento   = new Date("1999-05-17T00:00:00");
    this.minhaIdade       = 23;
    this.valorHora        = 50;
    this.horasTrabalhadas = 223;
    this.estouEstudando   = false;
    this.salarioTotal     = this.valorHora * this.horasTrabalhadas;
    this.listaDeLivros    = ["O Sol Não é para todos", " Cem anos de solidão", " Um Homem de Sorte", " Odisseia"]
  }

  ngOnInit(): void {
  }
}
