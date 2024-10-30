import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-docs-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, RouterLink],
  templateUrl: './docs-page.component.html',
  styleUrl: './docs-page.component.css'
})
export class DocsPageComponent {

}
