import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  links = [
      { text: 'Premium standard', href: '/product', type:'premium-standard' },
      { text: 'Timeless', href: '/product', type: 'timeless' },
      { text: 'Best terroir', href: '/product', type: 'terroir' },
      { text: 'Experimental', href: '/product', type: 'experimental' },
      { text: 'Rarity', href: '/product', type: 'rarity' },
      { text: 'House blend', href: '/product', type: 'house-blend' },
      { text: 'Khuyến mãi', href: '/product', type: 'promotion' },];
}
