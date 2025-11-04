import React from 'react';
import FaqAccordion from '../components/communication/FaqAccordion';
import { FAQS } from '../data/faqs';

const SupportHubPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-black">Support Hub</h1>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Welcome to our support center. Find answers to common questions or get in touch with our team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="bg-white p-6 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] sticky top-28">
                        <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                        <p className="font-semibold">Need more help?</p>
                        <p className="text-gray-600">Our team is here for you.</p>
                        <div className="mt-4 space-y-2">
                            <p><strong>Email:</strong> support@khelaghor.com</p>
                            <p><strong>Phone:</strong> +880 1XXX-XXXXXX</p>
                            <p><strong>Hours:</strong> 9am - 6pm (Sat-Thu)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportHubPage;
