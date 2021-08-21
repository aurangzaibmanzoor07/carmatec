import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white w-100">
        <div className="container d-flex py-2 justify-content-center">
          {/* // ? Logo */}
          <img
            src="/images/logo.png"
            alt="Carmatec Logo"
            height="55"
            width="105"
          />

          <ul className="d-flex list-unstyled justify-content-between items align-items-center mb-0 ms-4 fw-bold">
            <li>
              BIZ SOLUTION <i className="fas fa-angle-down ms-1"></i>
              <div className="list-unstyled sub-nav rounded border">
                <div className="row px-3 py-2">
                  <div className="col-4 d-flex flex-column justify-content-center">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/calculator.svg"
                        alt="Carmatec Calculator"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          DIGITAL TRANSFORMATION
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Let's Reinvent your business by digitally transforming
                          it.
                        </p>
                      </div>
                    </div>

                    {/* // ? Second */}
                    <div className="d-flex my-3">
                      <img
                        src="/svgs/postcard-1.svg"
                        alt="Carmatec Postcard"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          CRM SOLUTION
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Carmatec’s Custom CRM Solutions are tailor-made to
                          suit all of your CRM requirements.
                        </p>
                      </div>
                    </div>

                    {/* // ? third */}
                    <div className="d-flex">
                      <img
                        src="/svgs/cart-full.svg"
                        alt="Carmatec Cart"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          ECOMMERCE AS A SERVICE
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Get a highly interactive E-Store for your business as
                          per your requirements &amp; budget.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex flex-column justify-content-center">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/bar-chart.svg"
                        alt="Carmatec Bar Chart"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          ENTERPRISE DASHBOARD DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          See your business growth come live with real time
                          dashboard.
                        </p>
                      </div>
                    </div>

                    {/* // ? Second */}
                    <div className="d-flex my-3">
                      <img
                        src="/svgs/cogs.svg"
                        alt="Carmatec Cogs"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          ENTERPRISE APPLICATION INTEGRATION
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Seamless enterprise integration for guided approach to
                          streamlining your business.
                        </p>
                      </div>
                    </div>

                    {/* // ? third */}
                    <div className="d-flex">
                      <img
                        src="/svgs/cloud.svg"
                        alt="Carmatec Cloud"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          ENTERPRISE CLOUD SLOUTIONS
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Be it software, cloud or IT cloud we have experts who
                          can guide you through stage-wise adoption.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex flex-column">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/rocket.svg"
                        alt="Carmatec Rocket"
                        width="15"
                        height="15"
                        className="mt-1"
                      />
                      <div className="ms-2">
                        <Link
                          to="/"
                          className="small text-decoration-none link d-block"
                        >
                          STARTUP
                        </Link>
                        <p className="mb-0 small fw-normal">
                          We have got a smart plan of action to make it work for
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              WEB &amp; MOBILE <i className="fas fa-angle-down ms-1"></i>
            </li>
            <li>
              CLOUD IT <i className="fas fa-angle-down ms-1"></i>
            </li>
            <li>
              SMART WEB <i className="fas fa-angle-down ms-1"></i>
            </li>
            <li>
              ABOUT US <i className="fas fa-angle-down ms-1"></i>
            </li>
            <li>
              OUR WORK <i className="fas fa-angle-down ms-1"></i>
            </li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
