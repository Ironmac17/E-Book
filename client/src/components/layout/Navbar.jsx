import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import { Menu, X, BookOpen, LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropdownOpen) setProfileDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropdownOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-transform duration-300 group-hover:scale-110">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900 tracking-tight group-hover:text-violet-700 transition-colors duration-200">
              AI eBook Creator
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors duration-200"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <ProfileDropdown
                isOpen={profileDropdownOpen}
                onToggle={(e) => {
                  e.stopPropagation();
                  setProfileDropdownOpen(!profileDropdownOpen);
                }}
                avatar={user?.avatar || ""}
                companyName={user?.name || ""}
                email={user?.email || ""}
                userRole={user?.role || ""}
                onLogout={() => console.log("LogOut")}
              />
            ) : (
              <>
                <a
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg shadow-md hover:shadow-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </a>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-150"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
       
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link)=>(
              <a 
                key={link.name}
                href={link.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-gray-100">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3 px-2">
                  <div className="h-8 w-8 bg-gradient-to-br from-violet-400 to-violet-500 rounded-all flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {user?.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <button className="w-full px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2" onClick={()=>logout()}>
                  <LogOut className="w-4 h-4" />
                  <span> Sign out</span>
                </button>
              </div>
            ):(
              <div className="space-y-2">
                <a href="/login"
                    className="block text-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  Login
                </a>
                <a href="/signup"
                    className="block text-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg shadow-lg shadow-violet-500/30 transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
            )
          }
          </div>
        </div>
      )}
    
    </header>
  );
};

export default Navbar;
