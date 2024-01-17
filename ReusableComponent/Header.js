import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <p className="navbar-brand text-white text-uppercase mx-3">
        Pradeep Portfolio
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon bg-white"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end mx-3"
        id="menu"
      >
        <ul className="navbar-nav">
          <Link href="/">
            <li class="nav-item">
              <p className="nav-link">Home</p>
            </li>
          </Link>

          <Link href="/Components/blog">
            <li class="nav-item">
              {" "}
              <p className="nav-link">Blog</p>
            </li>
          </Link>
          <Link href="/Components/address">
            <li class="nav-item">
              {" "}
              <p className="nav-link">Address</p>
            </li>
          </Link>
          <Link href="/Components/contact">
            <li class="nav-item">
              {" "}
              <p className="nav-link">Contact</p>
            </li>
          </Link>
          <Link href="/Components/location">
            <li class="nav-item">
              {" "}
              <p className="nav-link">Location</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
