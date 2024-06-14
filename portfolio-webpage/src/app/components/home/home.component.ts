import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FeatureComponent, PricingComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
