import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../../services/visibility.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  showNavbarFooter!: boolean;
  constructor(
    private router: Router,
    public visibilityService: VisibilityService
  ) {}

  ngOnInit(): void {
    
  }

  goToLogin() {
    this.visibilityService.hide();
    this.router.navigate(['/login']);
  }
}
