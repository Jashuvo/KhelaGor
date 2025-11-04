import React from 'react';
import Link from './Link';

const FacebookIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
    </svg>
);

const YoutubeIcon = () => (
     <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 01-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 01-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 011.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" clipRule="evenodd" />
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black border-t-2 border-black">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold text-black">KhelaGhor</h2>
            <p className="mt-2 text-gray-600">Bringing joy to every child.</p>
             <div className="mt-4">
                <p className="font-semibold text-black">Contact Us:</p>
                <p className="text-gray-600">Phone: +880 1XXX-XXXXXX</p>
                <p className="text-gray-600">Email: support@khelaghor.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-black">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link to="#/" className="text-gray-600 hover:text-black">Home</Link></li>
                    <li><Link to="#/products" className="text-gray-600 hover:text-black">All Toys</Link></li>
                    <li><Link to="#/account" className="text-gray-600 hover:text-black">My Account</Link></li>
                    <li><Link to="#/admin" className="text-gray-600 hover:text-black">Admin Panel</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">Follow Us</h3>
                <div className="flex space-x-4 mt-4">
                   <a href="#" className="text-gray-600 hover:text-black transition-colors"><FacebookIcon /></a>
                   <a href="#" className="text-gray-600 hover:text-black transition-colors"><InstagramIcon /></a>
                   <a href="#" className="text-gray-600 hover:text-black transition-colors"><YoutubeIcon /></a>
                </div>
              </div>
          </div>
          <div>
             <h3 className="text-lg font-bold text-black">Newsletter</h3>
             <p className="mt-2 text-gray-600">Get updates on new toys and special offers!</p>
             <div className="mt-4 flex rounded-lg border-2 border-black focus-within:border-blue-500 transition-colors">
                <input type="email" placeholder="Enter your email" className="bg-transparent w-full py-2 px-4 focus:outline-none text-black" />
                <button className="bg-yellow-300 text-black font-bold p-2 px-4 rounded-r-md -mr-px border-l-2 border-black">Subscribe</button>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} KhelaGhor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;