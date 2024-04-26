import "./navbar.css";
import { NavButton } from "./nav-button/nav-button";
import { Link } from "react-router-dom";
import { CatalogMenu } from "../../catalog-menu/ui/catalogMenu";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import axios from "axios";

export function Navbar() {
  const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <div className="navbar">
      <div
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => {
          setIsShown(false);
        }}
      >
        <NavButton category="каталог" />
      </div>
      <Link to="new">
        <NavButton category="новинки" />
      </Link>
      <Link to="popular">
        <NavButton category="популярное" />
      </Link>
      <Link to="sale">
        <NavButton category="распродажа" />
      </Link>
      <Link to="delivery">
        <NavButton category="доставка" />
      </Link>
      <Link to="contacts">
        <NavButton category="контакты" />
      </Link>

      {isShown ? (
        <div
          onMouseEnter={() => {
            setIsShown(true);
          }}
          onMouseLeave={() => setIsShown(false)}
        >
          {createPortal(<CatalogMenu />, document.body)}
        </div>
      ) : null}
    </div>
  );
}
