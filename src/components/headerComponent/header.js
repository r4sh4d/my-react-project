import React from 'react';

function Header() {
  return (
    <header className="header">

      <h1 className="header__logo">
        JP
      </h1>

      <ul className="navigation header__navigation">
        <li className="navigation__item">
          <a className="navigation__link" href="#">Homepage</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">Map examples</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">Categories</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">About</a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">Pages</a>
        </li>
        <li className="navigation__item">
          <select className="navigation__lang">
            <option>EN</option>
            <option>RU</option>
            <option>AZ</option>
          </select>
        </li>
      </ul>

    </header>
  );
}

export default Header;
