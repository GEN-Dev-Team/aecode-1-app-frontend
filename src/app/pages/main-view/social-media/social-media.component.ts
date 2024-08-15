import { Component } from '@angular/core';
import { WhatsappIconComponent } from '../../../components/icons/whatsapp-icon/whatsapp-icon.component';
import { InstagramIconComponent } from '../../../components/icons/instagram-icon/instagram-icon.component';
import { LinkedinIconComponent } from '../../../components/icons/linkedin-icon/linkedin-icon.component';
import { FacebookIconComponent } from '../../../components/icons/facebook-icon/facebook-icon.component';
import { YoutubeIconComponent } from '../../../components/icons/youtube-icon/youtube-icon.component';
import { TiktokIconComponent } from '../../../components/icons/tiktok-icon/tiktok-icon.component';
import { SendIconComponent } from '../../../components/icons/send-icon/send-icon.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    WhatsappIconComponent,
    InstagramIconComponent,
    LinkedinIconComponent,
    FacebookIconComponent,
    YoutubeIconComponent,
    TiktokIconComponent,
    SendIconComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {}
