import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  lists: any = [
    {
      text: 'Set your professional profile website',
      hint: 'Set yourself up for success'
    },
    {
      text: 'Connect with B2B Search',
      hint: 'Keep in touch and find opportunities'
    },
    {
      text: 'Find the News & Insights',
      hint: 'Get inspired in your ...'
    }
  ];
  icons: any = [
    {
      label: 'Facebook',
      icon: 'assets/images/facebook.svg'
    },
    {
      label: 'Twitter',
      icon: 'assets/images/twitter.svg'
    },
    {
      label: 'Instagram',
      icon: 'assets/images/instagram.svg'
    }
  ];
}
