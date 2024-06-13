import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../../services/visibility.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
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