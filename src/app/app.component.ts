import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-variaveis></app-variaveis>
  `,
})
export class AppComponent {
  title = 'variavel-interpolacao-loiane';
}
