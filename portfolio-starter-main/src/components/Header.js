import React from 'react';

// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
      <header className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* logo*/}
            <a href="#">
              <img src={Logo} alt="" className="w-24 h-auto" />
            </a>
            {/* button */}
            <button className="btn btn-sm">work with me</button>
          </div>
        </div>
      </header>
  );
};

export default Header;
