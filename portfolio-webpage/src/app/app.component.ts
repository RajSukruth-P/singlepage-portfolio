import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { DUMMY_DATA } from './data/card.data';
import { Card } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RouterLink,FooterComponent,CardsComponent,CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-webpage';
  cards!: Card[];

  ngOnInit(): void {
    initFlowbite();
    this.cards = DUMMY_DATA
  }
}
