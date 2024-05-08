import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-account-page',
    standalone: true,
    templateUrl: './account-page.component.html',
    styleUrl: './account-page.component.scss',
    imports: [HeaderComponent, FooterComponent, RouterLink]
})
export class AccountPageComponent {
    title:string = 'Account login/Signup'
}
