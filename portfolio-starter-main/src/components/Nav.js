import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
            <div className="flex justify-center">
                {/* nav inner */}
                <div className="bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] w-full px-5 flex justify-between items-center text-2xl text-white/50">
                    <Link to="home"
                          activeclass={true}
                          smooth={true}
                          offset={-200}
                          spy={true}
                          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BiHomeAlt/>
                    </Link>
                    <Link to="about"
                          activeclass={true}
                          smooth={true}
                          spy={true}
                          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BiUser/>
                    </Link>
                    <Link to="services"
                          activeclass={true}
                          smooth={true}
                          spy={true}
                          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BsClipboardData/>
                    </Link>
                    <Link to="work"
                          activeclass={true}
                          smooth={true}
                          spy={true}
                          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BsBriefcase/>
                    </Link>
                    <Link to="contact"
                          activeclass={true}
                          smooth={true}
                          spy={true}
                          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BsChatSquare/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
