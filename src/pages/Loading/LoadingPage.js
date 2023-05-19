import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
// import LOGO from "assets/images/logo3.png";


export const LoadingPage = () => {
  return (
    <div className={'loading_page'}>
      {/* <img src={LOGO} alt="logo" /> */}
      <MoonLoader size={50} color={'dark_green'} />
    </div>
  );
};
