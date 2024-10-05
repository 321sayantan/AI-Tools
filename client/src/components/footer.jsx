import React from "react";

const Footer = () => {
  return (
    <div
      className="container"
      style={{
        minWidth: "100%",
        padding: "0px 50px",
        background:
          "linear-gradient(0deg, rgba(36,36,36,1) 0%, rgba(15,15,15,1) 100%)",
      }}
    >
      <footer className="py-5 pb-0 text-body-white">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
