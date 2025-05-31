import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-view-child-ng-content',
  imports: [ChildComponent],
  templateUrl: './view-child-ng-content.component.html',
  styleUrl: './view-child-ng-content.component.scss'
})
export class ViewChildNgContentComponent {

}
