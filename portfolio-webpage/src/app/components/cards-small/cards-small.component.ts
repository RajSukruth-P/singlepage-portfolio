import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-cards-small',
  standalone: true,
  imports: [],
  templateUrl: './cards-small.component.html',
  styleUrl: './cards-small.component.scss'
})
export class CardsSmallComponent {
  @Input() data: Card | undefined;

}
