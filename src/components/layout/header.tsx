import '../../index.css'
import { Link } from 'react-scroll';

import Logo from '@assets/logo.png';
import { links } from './nav-items';

export const Header = () => {
  return (
    <div className="flex flex-col items-center fixed top-0 left-0 w-full z-50 px-28 bg-[#F4F3F1]">
      <div className="flex w-full items-center justify-between h-16 mt-4">
        <div className="flex self-center w-28">
          <img
            src={Logo}
            className="w-full"
          />
        </div>

        <ul className="flex gap-2">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              //spy={true}
              //activeClass={"active"}
              offset={index > 0 ? -50 : 0}
              style={{
                cursor: "pointer",
                color: "white",
                borderRadius: '20px',
                padding: '5px 10px',
                minWidth: '100px',
              }}
            >
              <p className='text-center text-[#974627] font-semibold hover:scale-105 duration-100 font-montserrat text-sm'>
                {link.title}
              </p>
            </Link>
          ))}
        </ul>
      </div>
      <hr className="flex self-center w-full border-[#F5A61C]" />
    </div>
  )
}