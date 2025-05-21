import { Component } from '@angular/core';
import { Category, Subcategory } from '../../shared/model/category';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecommerce-header',
  imports: [CommonModule],
  templateUrl: './ecommerce-header.component.html',
  styleUrl: './ecommerce-header.component.scss'
})
export class EcommerceHeaderComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      subcategories: [
        {
          id: 1,
          name: 'Mobiles',
          imageUrl: 'assets/images/MasterCard.png',
          subSubcategories: [
            { id: 101, name: 'iPhone' },
            { id: 102, name: 'Samsung' },
            { id: 103, name: 'Vivo' },
            { id: 104, name: 'Realme' }
          ]
        },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Cameras' },
        { id: 4, name: 'Accessories' }
      ]
    },
    {
      id: 2,
      name: 'Fashion',
      subcategories: [
        { id: 5, name: 'Men' },
        { id: 6, name: 'Women' },
        {
          id: 7,
          name: 'Kids',
          imageUrl: 'assets/images/Discover.png',
          subSubcategories: [
            { id: 201, name: 'T-Shirts' },
            { id: 202, name: 'Trousers' }
          ]
        },
        { id: 8, name: 'Footwear' }
      ]
    },
    {
      id: 3,
      name: 'Home & Furniture',
      subcategories: [
        { id: 9, name: 'Beds' },
        {
          id: 10,
          name: 'Sofas',
          imageUrl: 'assets/images/Visa.png',
          subSubcategories: [
            { id: 301, name: 'Leather Sofas' },
            { id: 302, name: 'Recliners' }
          ]
        },
        {
          id: 11,
          name: 'Kitchen',
          imageUrl: 'assets/images/Amex.png',
          subSubcategories: [
            { id: 401, name: 'Cookware' },
            { id: 402, name: 'Appliances' }
          ]
        },
        { id: 12, name: 'Decor' }
      ]
    }
  ];

  hoveredCategoryId: number | null = null;
  hoveredSubcategoryImage: string | null = null;

  constructor(private router: Router) { }

  showPopup(categoryId: number) {
    this.hoveredCategoryId = categoryId;
    this.hoveredSubcategoryImage = null;
  }

  hidePopup() {
    this.hoveredCategoryId = null;
    this.hoveredSubcategoryImage = null;
  }

  onSubcategoryHover(sub: Subcategory) {
    this.hoveredSubcategoryImage = sub.imageUrl || null;
  }

  navigateToSubcategory(sub: Subcategory) {
    this.router.navigate(['/subcategory', sub.id]);
  }
  

}
