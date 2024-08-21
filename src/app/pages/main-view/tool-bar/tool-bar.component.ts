import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FireIconComponent } from '../../../components/icons/fire-icon/fire-icon.component';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [RouterLink, FireIconComponent],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css',
})
export class ToolBarComponent {}
