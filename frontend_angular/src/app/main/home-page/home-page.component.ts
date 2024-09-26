import { Component } from '@angular/core';
import { AplicationNavbarComponent } from '../../shared/aplication-navbar/aplication-navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AplicationNavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
