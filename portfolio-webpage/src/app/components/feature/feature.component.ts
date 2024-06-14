import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../interfaces/card.interface';
import { DUMMY_DATA } from '../../data/card.data';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent implements OnInit {
  length!: Card[];

  ngOnInit(): void {
    this.length = DUMMY_DATA;
  }
  

}
