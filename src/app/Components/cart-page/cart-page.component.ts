import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class CartPageComponent {
    title:String = 'Cart Page'
}
