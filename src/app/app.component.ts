import { Component } from '@angular/core';
import {
  faEtsy,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faXing,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  meOn: MeOn[] = [
    {
      platform: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/wanieldeiss/',
    },
    {
      platform: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/WanielDeiss',
    },
    {
      platform: 'BoardGameGeek',
      icon: faDice,
      url: 'https://boardgamegeek.com/user/WanielDeiss',
    },
    {
      platform: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/wanieldeiss/',
    },
    {
      platform: 'Etsy',
      icon: faEtsy,
      url: 'https://www.etsy.com/de/shop/DanielDice',
    },
    {
      platform: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/WanielDeiss',
    },
  ];
}

interface MeOn {
  platform: string;
  icon: IconDefinition;
  url: string;
}
