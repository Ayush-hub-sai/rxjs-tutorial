export interface SubSubcategory {
    id: number;
    name: string;
    imageUrl?: string;
}

export interface Subcategory {
    id: number;
    name: string;
    imageUrl?: string;
    subSubcategories?: SubSubcategory[];
}

export interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
}
