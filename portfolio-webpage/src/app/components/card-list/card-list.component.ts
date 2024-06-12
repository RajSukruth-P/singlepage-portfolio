import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { CardsComponent } from '../cards/cards.component';
import { CardsSmallComponent } from '../cards-small/cards-small.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardsComponent,CardsSmallComponent,CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  // In both SmallCardComponent and LargeCardComponent
  @Input() data!: Card[];

  cards!: Card[];
  largeCards: Card[] = [];
  smallCards: Card[] = [];

  ngOnInit() {
    this.cards = this.data;
    
    this.largeCards = this.cards.filter(card => card.type === 'large');
    // Filter out small cards
    this.smallCards = this.cards.filter(card => card.type === 'small');
    
  }

}