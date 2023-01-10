import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
