import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
      return () => clearTimeout(timeout);
    }, 3000);
  }, [list, removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
