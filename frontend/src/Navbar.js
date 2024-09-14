import React from "react";
import { Link } from "react-router-dom"; //a tag chi jagevar link tag and a chya href chi jagevar to

export default function Navbar() {
  return (
    <div className="containerr">
      <nav
        class="navbar navbar-expand-lg border-bottom bg-body-tertiary"
        style={{ backgroundColor: "#fff" }}
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="assets/logo.svg" alt="logo" style={{ width: "25%" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link  active" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item  dropdown">
                  <Link
                    class="nav-link  active"
                    aria-expanded="false"
                    to="/product"
                  >
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link  active "
                    aria-disabled="true"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link  active "
                    aria-disabled="true"
                    to="/support"
                  >
                    Support
                  </Link>
                </li>

                <li className="nav-item  ">
                  <a className="nav-link">
                    <i class="fa-solid fa-bars"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
