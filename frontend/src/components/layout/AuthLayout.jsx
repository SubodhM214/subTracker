import React from "react";

const AuthLayout = ({ children, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100">
        <img src={imageSrc} alt="Auth" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
