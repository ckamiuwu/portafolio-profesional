import { Component } from '@angular/core';
import { version as appVersion } from '../../../../package.json';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  public version: string = appVersion;

}
