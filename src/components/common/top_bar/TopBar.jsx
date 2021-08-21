import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar w-100 py-1">
      <div className="container d-flex justify-content-end">
        <a href="tel:+18883940048" className="top-bar-link me-3">
          <img src="/images/usa.jpg" alt="USA" height="13" width="23" />
          <span className="d-inline-block ms-2">+1 (888) 394-0048</span>
        </a>

        <a href="tel:+919611981318" className="top-bar-link">
          <img src="/images/india.jpg" alt="INDIA" height="13" width="23" />
          <span className="d-inline-block ms-2">+91 9611981318</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
