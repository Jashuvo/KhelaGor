import { Product } from '../types';
import { PRODUCTS } from '../data/products';

// Shuffle array and return a slice
const getRandomProducts = (arr: Product[], num: number, excludeId?: string): Product[] => {
    const filtered = excludeId ? arr.filter(p => p.id !== excludeId) : [...arr];
    return filtered.sort(() => 0.5 - Math.random()).slice(0, num);
};

export function getPersonalizedRecommendations(recentlyViewed: Product[]): Product[] {
    if (recentlyViewed.length === 0) {
        return [];
    }
    // Simple logic: find products in the same category as the last viewed item
    const lastViewed = recentlyViewed[0];
    const recommended = PRODUCTS.filter(p => p.category === lastViewed.category && p.id !== lastViewed.id);
    return getRandomProducts(recommended, 8, lastViewed.id);
}

export function getTrendingProducts(): Product[] {
    // Simple logic: products with the most reviews are "trending"
    const sorted = [...PRODUCTS].sort((a, b) => b.reviewCount - a.reviewCount);
    return sorted.slice(0, 8);
}

export function getPopularInArea(area: string): Product[] {
    // Mock logic: Just return some random popular items. In reality this would be data-driven.
    // Let's feature some outdoor and vehicle toys for "Dhaka"
    const popularCategories = ['Outdoor', 'Vehicles'];
    const popular = PRODUCTS.filter(p => popularCategories.includes(p.category));
    return getRandomProducts(popular, 8);
}


export function getFrequentlyBoughtTogether(product: Product): { products: Product[], discount: number } {
     // Mock logic: Find one other product from a complementary category
    let complementaryProduct: Product | undefined;
    switch(product.category) {
        case 'Dolls':
            complementaryProduct = PRODUCTS.find(p => p.name.includes('Barbie') && p.id !== product.id && p.category === 'Dolls');
            break;
        case 'Puzzles':
            complementaryProduct = PRODUCTS.find(p => p.brand === 'LEGO' && p.id !== product.id);
            break;
        default:
            complementaryProduct = getRandomProducts(PRODUCTS, 1, product.id)[0];
    }
    
    if (complementaryProduct) {
        return { products: [complementaryProduct], discount: 150 };
    }
    return { products: [], discount: 0 };
}


export function getSimilarProducts(product: Product): Product[] {
    // Simple logic: find products with the same brand but different names
    const similar = PRODUCTS.filter(p => p.brand === product.brand && p.id !== product.id);
    return similar.slice(0, 8);
}
