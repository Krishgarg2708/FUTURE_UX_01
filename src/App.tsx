/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import { ScrollToTop, StickyMobileBookingCTA } from './components/ExtraFeatures';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50/20 font-sans text-slate-800 antialiased">
        {/* Navigation bar - sticky on scroll */}
        <Navbar />

        {/* Dynamic primary content wrapper */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/services/teeth-whitening" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route handles incorrect paths by redirecting to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer Layout */}
        <Footer />

        {/* Conversion & Navigation helper elements */}
        <ScrollToTop />
        <StickyMobileBookingCTA />
      </div>
    </Router>
  );
}

