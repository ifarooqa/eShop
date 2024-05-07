import { Component } from '@angular/core';
import { QuickFilterComponent } from '../quick-filter/quick-filter.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [QuickFilterComponent, RouterLink],
})
export class HeaderComponent {}
