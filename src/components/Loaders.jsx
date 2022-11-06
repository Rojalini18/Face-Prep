import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
const Loaders = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="10.5"
      width="70"
      visible={true}
    />
  );
};
export default Loaders;
