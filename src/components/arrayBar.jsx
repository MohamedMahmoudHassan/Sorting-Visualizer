import React from "react";

const ArrayBar = ({ element, maxValue, barsNumber }) => {
  const colorsSchema = {
    normal: "#f5365c",
    isInComparison: "#32325d",
    isInSwap: "#2dce89"
  };
  // const colorsSchema = {
  //   normal: "#F8B530",
  //   isInComparison: "#68CBD0",
  //   isInSwap: "#08872C"
  // };

  const style = {
    width: 950 / Math.max(barsNumber, 8) - 2,
    height: element.value,
    marginTop: maxValue - element.value - 3,
    marginLeft: 2,
    textAlign: "center",
    backgroundColor:
      element.isInComparison === true
        ? colorsSchema.isInComparison
        : element.isInSwap === true
        ? colorsSchema.isInSwap
        : colorsSchema.normal
  };

  return <div style={style} />;
};

export default ArrayBar;
