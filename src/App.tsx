/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WebWork from './components/WebWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 dark:bg-[#0F0F0F] dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WebWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

