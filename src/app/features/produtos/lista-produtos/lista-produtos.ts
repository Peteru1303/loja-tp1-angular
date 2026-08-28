import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../../produto/card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false);

 produtosExibidos = computed(() => 
  this.apenasPromo() ? 
 this.produtos.filter(p => p.promo) :
 this.produtos);

 alternarPromo(){
  this.apenasPromo.update(v => !v)
 }

  produtos = <Produto[]>[
    {
    id: 1,
    nome: 'wegovy',
    preco: 2000.99,
    descricao: 'A gente governa :)',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: false,
    estado: 'novo'
  },
  {
    id: 2,
    nome: 'wegovy 2',
    preco: 3000.99,
    descricao: 'A gente governa mais 2 :))',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: false,
    estado: 'usado'
  },
  {
    id: 3,
    nome: 'wegovy 3',
    preco: 4000.99,
    descricao: 'A gente governa ainda mais 3 :D',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: true,
    estado: 'esgotado'
  },
  {
    id: 4,
    nome: 'wegovy 4',
    preco: 4000.99,
    descricao: 'A gente governa ainda mais mais 4 :DDDD',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: false,
    estado: 'novo'
  },
];

  onViewProduct(id: number){
  alert('Visualizando produto id: ' + id);
  }
  onAddProduct(produto: {id: number, qtd: number}){
    alert('Adicionado produto'+produto.id+' | quantidade: '+produto.qtd);

  }

}
