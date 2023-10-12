import React from "react";

import Svg from "../Svg";

const Icon = (props) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.8022 7.97437H4.80225C3.69768 7.97437 2.80225 8.8698 2.80225 9.97437V19.9744C2.80225 21.0789 3.69768 21.9744 4.80225 21.9744H20.8022C21.9068 21.9744 22.8022 21.0789 22.8022 19.9744V9.97437C22.8022 8.8698 21.9068 7.97437 20.8022 7.97437Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8022 21.9744V5.97437C16.8022 5.44393 16.5915 4.93522 16.2165 4.56015C15.8414 4.18508 15.3327 3.97437 14.8022 3.97437H10.8022C10.2718 3.97437 9.76311 4.18508 9.38803 4.56015C9.01296 4.93522 8.80225 5.44393 8.80225 5.97437V21.9744"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
