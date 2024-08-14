import { Component } from '@angular/core';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { CountDownComponent } from './count-down/count-down.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [ToolBarComponent, CountDownComponent, SocialMediaComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {}
