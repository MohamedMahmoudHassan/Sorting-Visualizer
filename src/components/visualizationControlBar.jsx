import React from "react";
import VisualizationButton from "./visualizationButton";

const VisualizationControlBar = ({ handleSortStart, recoverArray, isSorting }) => {
  return (
    <div className="py-1 bg-default">
      <div className="container">
        <div className="row">
          <div className="mt-4 mt-md-0 col-md-auto" style={{ margin: "auto" }}>
            <VisualizationButton
              handleClick={handleSortStart}
              role="step-backward"
              size={1}
              title="Previous Step"
            />
            <VisualizationButton
              handleClick={handleSortStart}
              role={isSorting ? "pause" : "play"}
              size={2}
              title="Run"
            />
            <VisualizationButton
              handleClick={handleSortStart}
              role="step-forward"
              size={1}
              title="Next Step"
            />
            <VisualizationButton
              handleClick={recoverArray}
              role="stop"
              size={1}
              title="Recover Array"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationControlBar;
