import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [HeaderComponent, ProductListingComponent, FooterComponent]
})
export class HomePageComponent {}
