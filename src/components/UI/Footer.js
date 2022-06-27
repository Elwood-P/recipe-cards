import React from 'react';
import SVG from 'react-inlinesvg';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__madeby">
        Made by&nbsp;<a className="footer__link" href="/">Paul Littlewood</a>
      </span>
      <span aria-hidden="true">|</span>
      <span className="footer__source">
        <a className="footer__link" href="/"><SVG src={`/icons/icon-github.svg`} /> View Source</a>
      </span>
    </footer>
  );
};

export default Footer;
