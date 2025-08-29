"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
  const [selected,set_selected] = useState("")

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close drawer when clicking outside of it
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event:any) => {
      if (isDrawerOpen && !event.target.closest('.drawer') && !event.target.closest('.hamburger-btn')) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDrawerOpen]);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-white border-bottom shadow-sm sticky-top z-index:-2 nav_index" >
      <div className="ms-2 me-2 py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="navbar-brand">
            <Link href="/" className="text-decoration-none text-dark fw-bold d-flex flex-row align-items-center gap-2">
              <Image 
                src="https://ngratesc.sirv.com/global_wisdom/logo.png" 
                className="img-fluid" 
                width={50} 
                height={50} 
                alt="Sprout & Co" 
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-block">
            <div className="d-flex gap-4">
            <Link href="/" className={`text-decoration-none  fw-medium hover-underline  ${selected==="Home"?"tp border-bottom border-warning border-3":"text-dark"}`} onClick={()=>set_selected("Home")}>Home</Link>
              <Link href="/about" className={`text-decoration-none fw-medium hover-underline ${selected==="About"?"tp border-bottom border-warning border-3":"text-dark"}`} onClick={()=>set_selected("About")}>About</Link>
              <Link href="/shop" className={`text-decoration-none fw-medium hover-underline ${selected==="Shop"?"tp border-bottom border-warning border-3":"text-dark"}`} onClick={()=>set_selected("Shop")}>Shop</Link>
              <Link href="/blog" className={`text-decoration-none fw-medium hover-underline ${selected==="Blog"?"tp border-bottom border-warning border-3":"text-dark"}`} onClick={()=>set_selected("Blog")}>Blog</Link>
              <Link href="/contact" className={`text-decoration-none  fw-medium hover-underline ${selected==="Contact"?"tp border-bottom border-warning border-3":"text-dark"}`} onClick={()=>set_selected("Contact")}>Contact</Link>
            </div>
          </div>

          {/* Call Button (Desktop) */}
          <div className="d-none d-md-block">
            <Link href="/contact">
              <button className="btn btn-outline-warning fw-bold ">
                Get Published
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="d-md-none">
            <button 
              className="btn hamburger-btn p-1" 
              onClick={toggleDrawer}
              aria-label="Menu"
            >
              <i className={`bi ${isDrawerOpen ? 'bi-x-lg' : 'bi-list'} fs-4 text-success`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`drawer bg-white position-fixed top-0 end-0 h-100 shadow-lg ${isDrawerOpen ? 'open' : ''}`}
        style={{
          width: '250px',
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1030,
          overflowY: 'auto'
        }}
      >
        <div className="drawer-content p-4">
          {/* Close Button */}
          <div className="d-flex justify-content-end mb-4">
            <button className="btn p-0" onClick={toggleDrawer} aria-label="Close menu">
              <i className="bi bi-x-lg fs-4 text-success"></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="d-flex flex-column gap-4 mb-5">
             <Link 
              href="/" 
              className="text-decoration-none text-dark fw-medium fs-5 py-2 border-bottom"
              onClick={() => setIsDrawerOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-decoration-none text-dark fw-medium fs-5 py-2 border-bottom"
              onClick={() => setIsDrawerOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/shop" 
              className="text-decoration-none text-dark fw-medium fs-5 py-2 border-bottom"
              onClick={() => setIsDrawerOpen(false)}
            >
              Shop
            </Link>
            
            <Link 
              href="/blog" 
              className="text-decoration-none text-dark fw-medium fs-5 py-2 border-bottom"
              onClick={() => setIsDrawerOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-decoration-none text-dark fw-medium fs-5 py-2 border-bottom"
              onClick={() => setIsDrawerOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Call Button */}
          <Link href="/contact" className="text-decoration-none">
            <button className="btn btn-outline-warning w-100" onClick={() => setIsDrawerOpen(false)}>
              <i className="bi bi-telephone me-2"></i> Get Published
            </button>
          </Link>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {isDrawerOpen && (
        <div 
          className="position-fixed top-0 start-0 h-100 w-100" 
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.5)', 
            zIndex: 1020,
          }}
          onClick={toggleDrawer}
        />
      )}

      {/* Custom CSS */}
      <style jsx>{`
        .hover-underline {
          position: relative;
          transition: color 0.3s;
        }
        .hover-underline:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #198754;
          transition: width 0.3s;
        }
        .hover-underline:hover {
          color: #198754 !important;
        }
        .hover-underline:hover:after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;