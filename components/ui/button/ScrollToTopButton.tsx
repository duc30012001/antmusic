'use client';

import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

type Props = {};

export function ScrollToTopButton({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 100 pixels
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <div
      className="fixed bottom-28 right-5 z-10 cursor-pointer rounded-full bg-gray-700 p-3 text-3xl hover:bg-gray-600"
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  ) : null;
}
