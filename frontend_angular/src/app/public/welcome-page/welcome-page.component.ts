import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, RouterLink],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

}
