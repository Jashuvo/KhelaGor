
import React, { useState, useEffect } from 'react';
import { NotificationProvider } from './contexts/NotificationProvider';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { CompareProvider } from './contexts/CompareContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { TrackingProvider } from './contexts/TrackingContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNavBar from './components/BottomNavBar';
import CompareBar from './components/CompareBar';
import ScrollToTopButton from './components/ScrollToTopButton';
import RecentlyViewed from './components/recommendations/RecentlyViewed';
import AdminLayout from './components/Admin/AdminLayout';

// Pages
import Homepage from './pages/Homepage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import WishlistPage from './pages/WishlistPage';
import ComparePage from './pages/ComparePage';
import AccountPage from './pages/AccountPage';
import SearchResultsPage from './pages/SearchResultsPage';
import TrackOrderPage from './pages/TrackOrderPage';
import SupportHubPage from './pages/SupportHubPage';
import ReturnsPage from './pages/ReturnsPage';
import AddressesPage from './pages/AddressesPage';
import SettingsPage from './pages/SettingsPage';
import NotAuthorizedPage from './pages/NotAuthorizedPage';
import NotFoundPage from './pages/NotFoundPage';


const AppContent: React.FC = () => {
    const [route, setRoute] = useState(window.location.hash);
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash || '#/');
            window.scrollTo(0, 0);
        };
        window.addEventListener('hashchange', handleHashChange);
        // Initial load
        handleHashChange();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    const renderPage = () => {
        const path = route.split('?')[0];
        const params = new URLSearchParams(route.split('?')[1]);

        if (path.startsWith('#/admin')) {
            if (!isAuthenticated || !user?.isAdmin) {
                return <NotAuthorizedPage />;
            }
            return <AdminLayout route={route} />;
        }
        
        if (path.startsWith('#/product/')) {
            const productId = path.split('/')[2];
            return <ProductDetailPage productId={productId} />;
        }

        if (path.startsWith('#/search')) {
            return <SearchResultsPage query={params.get('q') || ''} />;
        }
        
        if (path.startsWith('#/order-success')) {
            return <OrderSuccessPage orderId={params.get('id') || ''} />;
        }
        
        // Routes requiring authentication
        const authRoutes = ['#/account', '#/checkout', '#/account/orders', '#/account/addresses', '#/account/settings'];
        if (authRoutes.includes(path) && !isAuthenticated) {
            // For simplicity, showing NotAuthorizedPage. A real app might redirect to login.
            return <NotAuthorizedPage />;
        }

        switch (path) {
            case '':
            case '#/':
                return <Homepage />;
            case '#/products':
                return <ProductListingPage />;
            case '#/cart':
                return <CartPage />;
            case '#/checkout':
                return <CheckoutPage />;
            case '#/wishlist':
                return <WishlistPage />;
            case '#/compare':
                return <ComparePage />;
            case '#/account':
                return <AccountPage />;
            case '#/account/addresses':
                return <AddressesPage />;
            case '#/account/settings':
                return <SettingsPage />;
            case '#/track-order':
                return <TrackOrderPage />;
            case '#/support':
                return <SupportHubPage />;
            case '#/returns':
                return <ReturnsPage />;
            default:
                return <NotFoundPage />;
        }
    };
    
    const isFullPageLayout = route.startsWith('#/admin');

    if (isFullPageLayout) {
        return <>{renderPage()}</>;
    }
    
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF4E5]">
            <Header />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
            <BottomNavBar />
            <CompareBar />
            <ScrollToTopButton />
            <RecentlyViewed />
        </div>
    );
};


const App: React.FC = () => {
    return (
        <NotificationProvider>
            <AuthProvider>
                <TrackingProvider>
                    <CartProvider>
                        <WishlistProvider>
                            <CompareProvider>
                                <AppContent />
                            </CompareProvider>
                        </WishlistProvider>
                    </CartProvider>
                </TrackingProvider>
            </AuthProvider>
        </NotificationProvider>
    );
};

export default App;
