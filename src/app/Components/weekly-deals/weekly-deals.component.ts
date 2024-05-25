import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-weekly-deals',
    standalone: true,
    templateUrl: './weekly-deals.component.html',
    styleUrl: './weekly-deals.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class WeeklyDealsComponent {
  title:string = 'Weekly Deals'
}
