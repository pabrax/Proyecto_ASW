import { Component } from '@angular/core';
import { AplicationNavbarComponent } from '../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from "../../../components/aplication-header/aplication-header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, AplicationHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
