import React from 'react';
import { ADMIN_STATS, SALES_CHART_DATA, RECENT_ORDERS, ORDER_STATUS_PIE_DATA, LOW_STOCK_PRODUCTS } from '../data/adminData';
import StatCard from '../components/Admin/StatCard';
import SalesChart from '../components/Admin/SalesChart';
import OrderStatusPieChart from '../components/Admin/OrderStatusPieChart';
import RecentOrdersTable from '../components/Admin/RecentOrdersTable';
import LowStockAlertsTable from '../components/Admin/LowStockAlertsTable';
import AdminCard from '../components/Admin/AdminCard';
import { RevenueIcon, SalesIcon, CustomersIcon, PendingOrdersIcon } from '../components/Admin/AdminIcons';

const AdminDashboardPage: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value={ADMIN_STATS.totalRevenue.value} change={ADMIN_STATS.totalRevenue.change} icon={<RevenueIcon />} />
                <StatCard title="Total Sales" value={ADMIN_STATS.totalSales.value} change={ADMIN_STATS.totalSales.change} icon={<SalesIcon />} />
                <StatCard title="New Customers" value={ADMIN_STATS.newCustomers.value} change={ADMIN_STATS.newCustomers.change} icon={<CustomersIcon />} />
                <StatCard title="Pending Orders" value={ADMIN_STATS.pendingOrders.value} icon={<PendingOrdersIcon />} />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <AdminCard title="Sales Overview (Last 6 Months)">
                        <SalesChart data={SALES_CHART_DATA} />
                    </AdminCard>
                </div>
                <div className="lg:col-span-2">
                    <AdminCard title="Order Status">
                        <OrderStatusPieChart data={ORDER_STATUS_PIE_DATA} />
                    </AdminCard>
                </div>
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AdminCard title="Recent Orders" viewAllLink="#/admin/orders">
                    <RecentOrdersTable orders={RECENT_ORDERS} />
                </AdminCard>
                <AdminCard title="Low Stock Alerts" viewAllLink="#/admin/products">
                    <LowStockAlertsTable products={LOW_STOCK_PRODUCTS} />
                </AdminCard>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
