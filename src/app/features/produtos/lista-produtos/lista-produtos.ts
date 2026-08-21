import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../../produto/card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = <Produto[]>[
    {
    id: 1,
    nome: 'wegovy',
    preco: 2000.99,
    descricao: 'A gente governa :)',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: false
  },
  {
    id: 2,
    nome: 'wegovy 2',
    preco: 3000.99,
    descricao: 'A gente governa mais 2 :))',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: false
  },
  {
    id: 3,
    nome: 'wegovy 3',
    preco: 4000.99,
    descricao: 'A gente governa ainda mais 3 :D',
    imageUrl: 'Imagens/wegovy.jpeg',
    promo: true
  },
];

  onViewProduct(id: number){
  alert('Visualizando produto id: ' + id);
  }
  onAddProduct(produto: {id: number, qtd: number}){
    alert('Adicionado produto'+produto.id+' | quantidade: '+produto.qtd);

  }

}
