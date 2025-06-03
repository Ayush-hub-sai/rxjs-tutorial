import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  routerList: any[] = [
    // {label:'Dashboard',route:'learn-dashboard'},
    {label:'Rxjs',route:'rxjs-operator'},
    {label:'Crud',route:'crud-operation'},
    {label:'Renderer',route:'renderer'},
    {label:'View Encapsulation',route:'view-encapsulatons'},
    {label:'Signals',route:'signals'},
    {label:'Payment',route:'payment'},
    {label:'E-Commerce',route:'e-commerce'},
    {label:'View Child/Ng Content',route:'view-Child-ng-content'},
    {label:'Host Listener/Binding',route:'hostListener-hostBinding'},
    {label:'Captcha',route:'captcha'},
    {label:'Geo-Locations',route:'locations'},
    {label:'SSR',route:'ssr'},
    {label:'Chatbot',route:'chatbot'},
    {label:'Logic',route:'logic'},
    {label:'Html Design',route:'html-design'},
  ]
}
