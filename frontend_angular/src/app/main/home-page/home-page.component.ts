import { Component } from '@angular/core';
import { AplicationNavbarComponent } from '../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from "../../shared/aplication-header/aplication-header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, AplicationHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
