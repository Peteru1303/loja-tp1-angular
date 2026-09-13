import { Component } from '@angular/core';
import { ListaProdutos } from '../produtos/lista-produtos/lista-produtos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ListaProdutos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
