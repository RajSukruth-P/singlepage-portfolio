import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  
  @Input() data!: Card;
  // In both SmallCardComponent and LargeCardComponent
  card!:Card;

  ngOnInit(): void {
    
  }
  

}
