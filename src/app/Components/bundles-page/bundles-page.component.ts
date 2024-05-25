import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-bundles-page',
    standalone: true,
    templateUrl: './bundles-page.component.html',
    styleUrl: './bundles-page.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class BundlesPageComponent {
  title:string = 'Bundles';
}
