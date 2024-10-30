import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
