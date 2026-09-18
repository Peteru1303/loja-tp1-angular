import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private logger = inject(LoggerService);
  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';



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
  this.logger.info('[PRODUTO SERVICE] - Retornando lista de produtos')
  return this.http.get<any[]>(this.apiUrl).pipe(
    map(lista => lista.map(prod => ProdutoMapper.fromJson(prod))),
    catchError(erro => {
      this.logger.error("[PRODUTO SERVICE] - Erro ao listar produto");
      return of ([])
  })
  )
}
getByID(id: number): Observable<Produto|undefined>{
  //exercicio
  return of(this.listaMock.find(p => p.id === id)).pipe(delay(500));
}

}
