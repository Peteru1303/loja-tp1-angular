import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = input.required<string>()
  textoSobre = output<string>();

  enviarSobre():void{
    this.textoSobre.emit('Tecnicas de Programação 1.\n Desenvolvido Por Pedro Paulo')
  }

  exibirMensagem(msg: string): void {
    alert(msg);
  }
  
}

