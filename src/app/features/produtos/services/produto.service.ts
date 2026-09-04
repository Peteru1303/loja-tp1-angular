import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
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

listar(): Observable<Produto[]>{
  this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos")
  return of(this.listaMock).pipe(
    delay(250)
);
}

}
