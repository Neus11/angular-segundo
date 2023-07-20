import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.intefaces';

@Component({
  selector: 'gifs-cards',
  templateUrl: './gifs-card.component.html',
})

export class GifsCardsComponent implements OnInit{

  ngOnInit(): void {
    if ( !this.gifs ) throw new Error('Gif property is required.');
  }

  @Input()
  public gifs!: Gif;
}
