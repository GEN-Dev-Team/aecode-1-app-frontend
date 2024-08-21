import { Component } from '@angular/core';
import { WorldIconComponent } from '../../icons/world-icon/world-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [WorldIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
