import React from "react";

const customStyle = {
  color: "green",
  fontSize: "20px",
  border: "1px solid black",
};

function Heading() {
  return (
    <h1 style={customStyle} className="heading">
      Favourite Food
    </h1>
  );
}

export default Heading;
