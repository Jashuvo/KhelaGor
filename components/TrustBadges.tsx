import React from 'react';

const DeliveryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10" /></svg>
);
const CashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);
const SecureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.18-4.181M12 2.944A11.955 11.955 0 003.382 5.984m8.636 14.433A12.02 12.02 0 0121 12a11.955 11.955 0 00-3.382-6.016m-11.236 0a11.955 11.955 0 0111.236 0" /></svg>
);

const TrustBadge: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="flex items-center p-4 bg-white border-2 border-black rounded-lg shadow-[5px_5px_0px_#000]">
        <div className="flex-shrink-0 text-black">{icon}</div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-black">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);


const TrustBadges: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrustBadge icon={<DeliveryIcon />} title="Free Delivery in Dhaka" description="On all orders over ৳1,500" />
          <TrustBadge icon={<CashIcon />} title="Cash on Delivery" description="Pay when you receive your order" />
          <TrustBadge icon={<SecureIcon />} title="Secure Payment" description="100% secure online payments" />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
