import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/rf-logo.svg';

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const klikMasuk = () => {
    navigate('/masuk');
  };

  return (
    <nav className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${scrolled ? 'bg-[#eaeaea] shadow-xl' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="h-12 cursor-pointer" />
        </div>
        <div className="flex items-center text-lg space-x-8">
          <Link to="/">Beranda</Link>
          <Link to="/fitur">Sewa Alat</Link>
          <Link to="/tentang">Tentang</Link>
          <button 
            className="px-8 py-2 text-[#f5f5f5] rounded-lg" 
            onClick={klikMasuk}
          >
            Masuk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
