import { CommonModule } from '@angular/common';
import { Item, MOCK_ECOMMERCE_ITEMS } from './../../shared/model/item';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-html-issues',
  imports: [CommonModule],
  templateUrl: './html-issues.component.html',
  styleUrl: './html-issues.component.scss'
})
export class HtmlIssuesComponent implements OnInit{
 
  items: Item[] = MOCK_ECOMMERCE_ITEMS;
  
  ngOnInit(): void {
    
  }
  
  position:string='center';
  move(side:string){
   this.position=side;
  }

}
