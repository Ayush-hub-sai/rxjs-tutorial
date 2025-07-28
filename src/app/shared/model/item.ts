export interface ItemVariant {
    type: 'color' | 'size';
    value: string;
    additionalPrice?: number;
    imageUrl?: string;
}

export interface Item {
    id: string;
    name: string;
    description?: string;
    price: number;
    discountPrice?: number;
    currency: 'INR' | 'USD' | 'EUR';
    imageUrl: string;
    images?: string[];
    categoryId: string;
    categoryName?: string;
    stock: number;
    isAvailable: boolean;
    rating?: number;
    tags?: string[];
    createdAt?: Date;
    updatedAt?: Date;
    sku?: string;
    isFeatured?: boolean;
    variants?: ItemVariant[];
}

export const MOCK_ECOMMERCE_ITEMS: Item[] = [
    {
        id: 'P1001',
        name: 'Nike Running Shoes',
        price: 3999,
        discountPrice: 3499,
        currency: 'INR',
        imageUrl: 'https://images.pexels.com/photos/19090/pexels-photo.jpg',
        categoryId: 'footwear',
        categoryName: 'Footwear',
        stock: 15,
        isAvailable: true,
        rating: 4.5,
        tags: ['sports', 'men'],
        createdAt: new Date(),
        variants: [
            { type: 'color', value: 'Red' },
            { type: 'size', value: 'UK 9' }
        ]
    },
    {
        id: 'P1002',
        name: 'Apple iPhone 14',
        price: 79999,
        discountPrice: 74999,
        currency: 'INR',
        imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
        categoryId: 'mobiles',
        categoryName: 'Mobiles',
        stock: 5,
        isAvailable: true,
        rating: 4.8,
        tags: ['electronics', 'apple', 'premium'],
        createdAt: new Date()
    },
    {
        id: 'P1003',
        name: 'Samsung Smart TV 43"',
        price: 28999,
        currency: 'INR',
        imageUrl: 'https://images.unsplash.com/photo-1573497019417-2b70b4e0f05c',
        categoryId: 'electronics',
        categoryName: 'Electronics',
        stock: 0,
        isAvailable: false,
        rating: 4.2,
        tags: ['home', 'entertainment']
    },
    {
        id: 'P1004',
        name: 'Canon DSLR Camera',
        price: 45999,
        discountPrice: 41999,
        currency: 'INR',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
        categoryId: 'cameras',
        categoryName: 'Cameras',
        stock: 7,
        isAvailable: true,
        rating: 4.3,
        tags: ['photography', 'dslr'],
        variants: [
            { type: 'color', value: 'Black' }
        ]
    },
    {
        id: 'P1005',
        name: 'Leather Office Chair',
        price: 8499,
        currency: 'INR',
        imageUrl: 'https://images.unsplash.com/photo-1512499617640-c2f9990589bb',
        categoryId: 'furniture',
        categoryName: 'Furniture',
        stock: 20,
        isAvailable: true,
        rating: 4.0,
        tags: ['office', 'furniture'],
        createdAt: new Date()
    },
    {
        id: 'P1006',
        name: 'Boat Rockerz 255 Pro+',
        price: 1299,
        discountPrice: 999,
        currency: 'INR',
        imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
        categoryId: 'audio',
        categoryName: 'Audio',
        stock: 35,
        isAvailable: true,
        rating: 4.6,
        tags: ['earphones', 'bluetooth', 'budget']
    },
    {
        id: 'P1001',
        name: 'Nike Running Shoes',
        price: 3999,
        discountPrice: 3499,
        currency: 'INR',
        imageUrl: 'https://images.unsplash.com/photo-1587574293340-ec872a933ddf',
        categoryId: 'footwear',
        categoryName: 'Footwear',
        stock: 15,
        isAvailable: true,
        rating: 4.5,
        tags: ['sports', 'men'],
        createdAt: new Date(),
        variants: [
            { type: 'color', value: 'Red' },
            { type: 'size', value: 'UK 9' }
        ]
    },
    {
        id: 'P1002',
        name: 'Apple iPhone 14',
        price: 79999,
        discountPrice: 74999,
        currency: 'INR',
        imageUrl: 'https://images.pexels.com/photos/6078124/pexels-photo-6078124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        categoryId: 'mobiles',
        categoryName: 'Mobiles',
        stock: 5,
        isAvailable: true,
        rating: 4.8,
        tags: ['electronics', 'apple', 'premium'],
        createdAt: new Date()
    },
    {
        id: 'P1003',
        name: 'Samsung Smart TV 43"',
        price: 28999,
        currency: 'INR',
        imageUrl: 'https://images.pexels.com/photos/7872762/pexels-photo-7872762.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        categoryId: 'electronics',
        categoryName: 'Electronics',
        stock: 0,
        isAvailable: false,
        rating: 4.2,
        tags: ['home', 'entertainment']
    },
    {
        id: 'P1004',
        name: 'Canon DSLR Camera',
        price: 45999,
        discountPrice: 41999,
        currency: 'INR',
        imageUrl: 'https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        categoryId: 'cameras',
        categoryName: 'Cameras',
        stock: 7,
        isAvailable: true,
        rating: 4.3,
        tags: ['photography', 'dslr'],
        variants: [
            { type: 'color', value: 'Black' }
        ]
    },
    {
        id: 'P1005',
        name: 'Leather Office Chair',
        price: 8499,
        currency: 'INR',
        imageUrl: 'https://images.pexels.com/photos/4042804/pexels-photo-4042804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        categoryId: 'furniture',
        categoryName: 'Furniture',
        stock: 20,
        isAvailable: true,
        rating: 4.0,
        tags: ['office', 'furniture'],
        createdAt: new Date()
    },
    {
        id: 'P1006',
        name: 'Boat Rockerz 255 Pro+',
        price: 1299,
        discountPrice: 999,
        currency: 'INR',
        imageUrl: 'https://images.pexels.com/photos/7889460/pexels-photo-7889460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        categoryId: 'audio',
        categoryName: 'Audio',
        stock: 35,
        isAvailable: true,
        rating: 4.6,
        tags: ['earphones', 'bluetooth', 'budget']
    }
];
