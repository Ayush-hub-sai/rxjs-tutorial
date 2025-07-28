import { Component, ContentChild, ElementRef, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterContentInit {

  @ContentChild('projectedTitle') title!: ElementRef;

  ngAfterContentInit() {
    console.log('Projected title:', this.title.nativeElement.textContent);
  }

  @ViewChild('myInput') inputValue!:ElementRef;

  logMessage() {
    console.log(this.inputValue.nativeElement.value);
  }

}
