import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-5 border-t">
      <span className="text-sm font-light">
        &copy; {new Date().getFullYear()} Min Phone Aung@Peter. All rights
        reserved.
      </span>
    </div>
  );
};

export default Footer;
