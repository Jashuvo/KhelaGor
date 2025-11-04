import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminDashboardPage from '../../pages/AdminDashboardPage';
import AdminProductsListPage from '../../pages/admin/AdminProductsListPage';
import AdminProductEditPage from '../../pages/admin/AdminProductEditPage';
import AdminOrdersListPage from '../../pages/admin/AdminOrdersListPage';
import AdminOrderDetailPage from '../../pages/admin/AdminOrderDetailPage';
import AdminReviewsPage from '../../pages/admin/AdminReviewsPage';
import AdminSmsPage from '../../pages/admin/AdminSmsPage';

interface AdminLayoutProps {
    route: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ route }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const renderAdminPage = () => {
        if (route.startsWith('#/admin/product/edit/')) {
            const productId = route.split('/')[4];
            return <AdminProductEditPage productId={productId} />;
        }
        if (route.startsWith('#/admin/order/')) {
            const orderId = route.split('/')[3];
            return <AdminOrderDetailPage orderId={orderId} />;
        }

        switch (route) {
            case '#/admin':
            case '#/admin/dashboard':
                return <AdminDashboardPage />;
            case '#/admin/products':
                return <AdminProductsListPage />;
            case '#/admin/products/new':
                 return <AdminProductEditPage />;
            case '#/admin/orders':
                return <AdminOrdersListPage />;
            case '#/admin/reviews':
                return <AdminReviewsPage />;
            case '#/admin/sms':
                return <AdminSmsPage />;
            default:
                return <AdminDashboardPage />; // Fallback to dashboard
        }
    };

    return (
        <div className="flex h-screen">
            <AdminSidebar isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                    {renderAdminPage()}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;