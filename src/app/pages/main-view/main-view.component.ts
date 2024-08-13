import { Component } from '@angular/core';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [ToolBarComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {}
