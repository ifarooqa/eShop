import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class AllProductsComponent {
  title:String = 'This is Store, containing all products'
}
