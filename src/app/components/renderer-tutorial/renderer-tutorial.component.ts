import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer-tutorial',
  imports: [],
  templateUrl: './renderer-tutorial.component.html',
  styleUrl: './renderer-tutorial.component.scss'
})
export class RendererTutorialComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    // 1. Add Class
    this.renderer.addClass(this.el.nativeElement.querySelector('#box'), 'highlight');

    // 2. Remove Class (after 2 seconds)
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement.querySelector('#box'), 'highlight');
    }, 7000);

    // 3. Set Attribute
    this.renderer.setAttribute(this.el.nativeElement.querySelector('#box'), 'title', 'This is a box');

    // 4. Remove Attribute (after 4 seconds)
    setTimeout(() => {
      this.renderer.removeAttribute(this.el.nativeElement.querySelector('#box'), 'title');
    }, 4000);

    // 5. Set Style
    this.renderer.setStyle(this.el.nativeElement.querySelector('#box'), 'backgroundColor', 'lightblue');

    // 6. Remove Style (after 3 seconds)
    setTimeout(() => {
      this.renderer.removeStyle(this.el.nativeElement.querySelector('#box'), 'backgroundColor');
    }, 3000);

    // 7. Create Element
    const newButton = this.renderer.createElement('button');
    this.renderer.setProperty(newButton, 'innerText', 'Click Me to test!');
    this.renderer.listen(newButton, 'click', () => alert('Button clicked!'));

    // 8. Append Child
    this.renderer.appendChild(this.el.nativeElement.querySelector('#container'), newButton);

    // 9. Create Text
    const newText = this.renderer.createText('This is dynamically added text.');
    this.renderer.appendChild(this.el.nativeElement.querySelector('#container'), newText);
  }
}
