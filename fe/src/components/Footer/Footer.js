import React from 'react';
import { Link } from 'react-router-dom';

import { DiscordIcon, TelegramIcon } from '../Svg';

import logo from '../../assets/imgs/logo.png';

import './Footer.scss';
import { LINKS } from '../../constants/footer';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-inner">
        <div className="utils">
          <Link to="/">
            <img id="header-logo" src={logo} height="44px" alt="logo" />
          </Link>
          <div className="utils-link">
            {Object.keys(LINKS).map((key) => {
              const col = LINKS[key];
              return (
                <div className="util-cols" key={key}>
                  <div key={col.label} className="link-header">
                    {col.label}
                  </div>
                  <>
                    {col.childs.map((child) => (
                      <div key={child.label} className="link-child">
                        {child.label}
                      </div>
                    ))}
                  </>
                </div>
              );
            })}
          </div>
        </div>
        <div className="socials">
          <div className="links">
            <TelegramIcon />
            <DiscordIcon />
          </div>
          <div className="copyright">Copyright © ADDDA 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
