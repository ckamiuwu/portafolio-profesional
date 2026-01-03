import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  imports: [],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.scss',
})
export class BrandingComponent {
  activeImg: string = 'assets/img/PortadaNisum.jpg';
  imagesSrc: string[] = [
    'assets/img/PortadaNisum.jpg',
    'assets/img/Revista_Nisum.jpg',
    'assets/img/Tarjetas_Nisum.jpg',
    'assets/img/Pendon_Nisum.jpg'
  ];

  changeImage(img: string) {
    this.activeImg = img;
  }
}
