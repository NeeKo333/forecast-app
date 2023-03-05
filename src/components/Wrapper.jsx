import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="content">{children}</div>
    </div>
  );
};

export default Wrapper;
