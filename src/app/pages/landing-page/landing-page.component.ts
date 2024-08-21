import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { WhatsappButtonComponent } from '../../components/layout/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, WhatsappButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
