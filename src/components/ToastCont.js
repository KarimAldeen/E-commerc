import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDirection from "../hooks/useDirection";

const CustomToastContainer = (props) => {
  const dir = useDirection();

  const position = dir === "ltr" ? "bottom-right" : "bottom-left";
  const rtl = dir === "rtl";

  return (
    <ToastContainer
      position={position}
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={rtl}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      {...props}
    />
  );
};

export default CustomToastContainer;
