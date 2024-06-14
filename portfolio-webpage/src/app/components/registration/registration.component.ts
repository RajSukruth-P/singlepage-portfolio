import { Component, OnDestroy, OnInit } from '@angular/core';
import { VisibilityService } from '../../services/visibility.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnDestroy,OnInit {
  constructor(private visibilityService: VisibilityService) {}
  ngOnInit(): void {
    this.visibilityService.hide();
  }


  ngOnDestroy() {
    // When the LoginComponent is destroyed, show the Navbar and Footer again
    this.visibilityService.show();
  }
}
