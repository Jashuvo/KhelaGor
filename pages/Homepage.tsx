
import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustBadges from '../components/TrustBadges';
import useSEO from '../hooks/useSEO';
import ProductCarousel from '../components/recommendations/ProductCarousel';
import { useTracking } from '../contexts/TrackingContext';
import { getPersonalizedRecommendations, getTrendingProducts, getPopularInArea } from '../utils/recommendations';


const Homepage: React.FC = () => {
    useSEO({
        title: 'KhelaGhor | The Ultimate Kids Toy Store in Bangladesh',
        description: 'Discover a world of imagination with KhelaGhor, Bangladesh\'s top online toy store. Shop for action figures, educational toys, dolls, and more. Free delivery in Dhaka!',
        keywords: 'toy store, kids toys, online toy shop, bangladesh, khelaghor, educational toys, dolls',
    });

    const { recentlyViewed } = useTracking();
    const recommendedForYou = getPersonalizedRecommendations(recentlyViewed);
    const trendingProducts = getTrendingProducts();
    const popularInDhaka = getPopularInArea('Dhaka');


    return (
        <>
            <Hero />
            <Categories />
            {recommendedForYou.length > 0 && (
                <ProductCarousel title="Recommended for You" products={recommendedForYou} />
            )}
            <ProductCarousel title="Trending This Week" products={trendingProducts} />
            <FeaturedProducts />
            <ProductCarousel title="Popular in Dhaka" products={popularInDhaka} />
            <TrustBadges />
        </>
    );
};

export default Homepage;
