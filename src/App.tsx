import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage';
import IndustryPage from './pages/IndustryPage';
import ContactPage from './pages/ContactPage';
import SearchResults from './pages/SearchResults';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GdprPolicy from './pages/GdprPolicy';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FaqPage';
import CookieConsent from './components/ui/CookieConsent';
import { usePerformance } from './hooks/usePerformance';
import Version from './pages/Version';
import InsightsPage from './pages/InsightsPage';
import AboutPage from './pages/AboutPage';
import ReferralsPage from './pages/ReferralsPage';
import AdminPage from './pages/AdminPage';

function App() {
  const { trackCustomMetric } = usePerformance();

  useEffect(() => {
    // Track initial page load
    const loadTime = performance.now();
    trackCustomMetric('InitialLoad', loadTime);

    // Track memory usage
    if (performance.memory) {
      trackCustomMetric('HeapSize', performance.memory.usedJSHeapSize);
    }
  }, [trackCustomMetric]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:solutionId" element={<SolutionsPage />} />
            <Route path="/industry" element={<IndustryPage />} />
            <Route path="/industry/:industryId" element={<IndustryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/gdpr" element={<GdprPolicy />} />            
            <Route path="/pricing" element={<PricingPage />} />         
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/insights" element={<InsightsPage />} />  
            <Route path="/insights/:articleName" element={<InsightsPage />} />
            <Route path="/about-us" element={<AboutPage />} />   
            <Route path="/referral/:referralId" element={<ReferralsPage />} />   
            <Route path="/admin" element={<AdminPage />} />   
            <Route path="/version" element={<Version />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;