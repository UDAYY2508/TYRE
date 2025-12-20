import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { BookAppointment } from './components/BookAppointment';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

type Page = 'home' | 'services' | 'book';

// Map URL paths to page types
const pathToPage = (path: string): Page => {
  if (path === '/services') return 'services';
  if (path === '/book' || path === '/book-appointment') return 'book';
  return 'home';
};

// Map page types to URL paths
const pageToPath = (page: Page): string => {
  if (page === 'services') return '/services';
  if (page === 'book') return '/book';
  return '/';
};

export default function App() {
  // Initialize page from current URL
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    return pathToPage(window.location.pathname);
  });

  // Update URL when page changes
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    const path = pageToPath(page);
    window.history.pushState({ page }, '', path);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      const page = pathToPage(path);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main className="flex-1">
        {currentPage === 'home' && <Home setCurrentPage={handlePageChange} />}
        {currentPage === 'services' && <Services setCurrentPage={handlePageChange} />}
        {currentPage === 'book' && <BookAppointment />}
      </main>
      <Footer />
    </div>
  );
}

