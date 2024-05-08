import { Component } from '@angular/core';
import { FooterSocialsComponent } from "../footer-socials/footer-socials.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { FooterCopyrightComponent } from "../footer-copyright/footer-copyright.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [FooterSocialsComponent, FooterNavComponent, FooterCopyrightComponent]
})
export class FooterComponent {

}
