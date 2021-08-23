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
              {/* // ? Sub Navigation */}
              <div className="list-unstyled sub-nav rounded border">
                <div className="row px-3 py-2 g-0">
                  <div className="col-4">
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
              {/* // ? Sub Navigation */}
              <div className="list-unstyled sub-nav rounded border">
                <div className="row px-3 py-2">
                  <div className="col-4">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/website.svg"
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
                          WEB APP DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Your unique business strategy translated into software
                          solution.
                        </p>
                      </div>
                    </div>

                    {/* // ? Second */}
                    <div className="d-flex">
                      <img
                        src="/svgs/mobile.svg"
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
                          MOBILE APP DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Carmatec helps your business with world-class mobile
                          application development services.
                        </p>
                      </div>
                    </div>

                    {/* // ? third */}
                    <div className="d-flex">
                      <img
                        src="/svgs/shopping-basket.svg"
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
                          ECOMMERCE DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          We develop customized eCommerce website tailored to
                          your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex flex-column justify-content-center">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/user.svg"
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
                          HIRE A DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Hire Dedicated developers in India and development
                          team for all your project needs.
                        </p>
                      </div>
                    </div>

                    {/* // ? Second */}
                    <div className="d-flex my-3">
                      <img
                        src="/svgs/php.svg"
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
                          PHP DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Build your next app with the world’s most popular
                          framework PHP
                        </p>
                      </div>
                    </div>

                    {/* // ? third */}
                    <div className="d-flex">
                      <img
                        src="/svgs/cloud-network.svg"
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
                          IOT APP DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Harness the potential of IOT development with our
                          experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/react.svg"
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
                          REACTJS DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          We provide the expert ReactJS development services for
                          your business.
                        </p>
                      </div>
                    </div>

                    {/* // ? SECOND */}
                    <div className="d-flex">
                      <img
                        src="/svgs/diamond-alt.svg"
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
                          ROR DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Choose the world’s start-up favorite framework – R0R
                          with International Award Winning Dev Shop.
                        </p>
                      </div>
                    </div>

                    {/* // ? third */}
                    <div className="d-flex">
                      <img
                        src="/svgs/flutter-favicon.png"
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
                          FLUTTER APP DEVELOPMENT
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Transform your digital presence with Cross-platform
                          Flutter App Development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              CLOUD IT <i className="fas fa-angle-down ms-1"></i>
              {/* // ? Sub Navigation */}
              <div className="list-unstyled sub-nav rounded border">
                <div className="row px-3 py-2 g-0">
                  <div className="col-4">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/headphone-alt.svg"
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
                          MANAGED IT SERVICES [24*7]
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Run a secure, sla driven network for smooth business
                          functions with our 24×7 services.
                        </p>
                      </div>
                    </div>

                    {/* // ? Second */}
                    <div className="d-flex my-3">
                      <img
                        src="/svgs/aws.svg"
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
                          AWS MANAGED SERVICES
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Plan, Design &amp; Migrate public cloud or hybrid
                          cloud systems with us. Be it a small website or a
                          global platform we have solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    {/* // ? First */}
                    <div className="d-flex">
                      <img
                        src="/svgs/cloud-download.svg"
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
                          CLOUD SOLUTIONS
                        </Link>
                        <p className="mb-0 small fw-normal">
                          IaaS, PaaS, SaaS – Use cloud to power your business
                          for agility, performance and cost savings.
                        </p>
                      </div>
                    </div>

                    {/* // ? Second */}
                    <div className="d-flex">
                      <img
                        src="/svgs/cloud-upload.svg"
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
                          CLOUD CONSULTING
                        </Link>
                        <p className="mb-0 small fw-normal">
                          Find the right cloud solutions to go in sync with your
                          evolving needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex">
                    <img
                      src="/svgs/cog-1.svg"
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
                        DEVOPS SERVICES
                      </Link>
                      <p className="mb-0 small fw-normal">
                        Deploy agile incremental value to your end customers
                        frequently with our CI/CD solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
