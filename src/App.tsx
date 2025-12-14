import React, { useState } from 'react';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { BookAppointment } from './components/BookAppointment';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

type Page = 'home' | 'services' | 'book';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'services' && <Services setCurrentPage={setCurrentPage} />}
        {currentPage === 'book' && <BookAppointment />}
      </main>
      <Footer />
    </div>
  );
}

