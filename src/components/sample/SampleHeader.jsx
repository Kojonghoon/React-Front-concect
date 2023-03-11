import React, { useState } from "react";

const SampleHeader = (props) => {
  console.log("SampleHeader : " + props.num);
  return (
    <>
      <div
        style={{ border: "5px solid yellow", width: "600px", height: "150px" }}
      >
        SampleHeader 페이지영역
        <h2>{props.num}</h2>
        <br />
      </div>
    </>
  );
};

export default SampleHeader;
