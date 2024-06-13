import { Component, OnDestroy, OnInit } from '@angular/core';
import { VisibilityService } from '../../services/visibility.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy,OnInit {
  constructor(private visibilityService: VisibilityService) {}
  ngOnInit(): void {
    this.visibilityService.hide();
  }


  ngOnDestroy() {
    // When the LoginComponent is destroyed, show the Navbar and Footer again
    this.visibilityService.show();
  }
}