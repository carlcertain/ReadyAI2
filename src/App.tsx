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
import CookieConsent from './components/ui/CookieConsent';
import { usePerformance } from './hooks/usePerformance';

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
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;