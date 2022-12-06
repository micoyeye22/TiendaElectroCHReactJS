import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
    const override = {
        display: "block",
        margin: "0 auto",
      };

    return <ClipLoader
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
}

export default Loader;