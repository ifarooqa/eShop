import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-filter',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quick-filter.component.html',
  styleUrl: './quick-filter.component.scss',
})
export class QuickFilterComponent {}
