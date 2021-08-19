import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <GridLoader color="#5d257e" />
    </div>
  );
};

export default Loader;
