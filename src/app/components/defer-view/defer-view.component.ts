import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defer-view',
  imports: [],
  templateUrl: './defer-view.component.html',
  styleUrl: './defer-view.component.scss'
})
export class DeferViewComponent implements OnInit {
  visible = false;

  ngOnInit() {
    setTimeout(() => {
      this.visible = true;
    }, 5000); 
  } 
}
