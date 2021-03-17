import React from "react";

const EmsDummyComponent = ({ radioVal }) => {
  const { ems, letters } = radioVal;
  return (
    <>
      {!letters && (
        <div>dummy text shown when ? is true THIS PART NEEDS FIXING</div>
      )}
    </>
  );
};

export default EmsDummyComponent;
