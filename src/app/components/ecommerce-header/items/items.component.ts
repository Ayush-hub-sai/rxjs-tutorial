import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSubcategory } from '../../../shared/model/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {
  subSubcategories: SubSubcategory[] = [];
  subCategoryId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subCategoryId = +params['subcategoryId'];
      this.loadSubSubcategories();
    });
  }

  loadSubSubcategories() {
    if (this.subCategoryId === 1) {
      this.subSubcategories = [
        { id: 101, name: 'iPhone' },
        { id: 102, name: 'Samsung' },
        { id: 103, name: 'Vivo' },
        { id: 104, name: 'Realme' }
      ];
    } else if (this.subCategoryId === 7) {
      this.subSubcategories = [
        { id: 201, name: 'T-Shirts' },
        { id: 202, name: 'Trousers' }
      ];
    } else if (this.subCategoryId === 10) {
      this.subSubcategories = [
        { id: 301, name: 'Leather Sofas' },
        { id: 302, name: 'Recliners' }
      ];
    } else {
      this.subSubcategories = [];
    }
  }
}
