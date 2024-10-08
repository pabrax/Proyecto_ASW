import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
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
