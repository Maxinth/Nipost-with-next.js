import React from "react";
import { DropDownContainer } from "./styled";
import useDropDown from "../../../useDropDown";

const MobileDropDown = () => {
  const { currentHeight, contentRef } = useDropDown();

  return (
    <DropDownContainer
      height={currentHeight}
      //   style={{ height: `${currentHeight}px` }}
    >
      <div ref={contentRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui
        fugiat minus iste mollitia unde. Illum nisi iure hic dolore labore
        reprehenderit repellendus accusantium, laudantium rerum provident optio
        cumque? Culpa voluptatibus at hic neque repellat, deserunt totam
        voluptate nesciunt quo impedit blanditiis corrupti illo reiciendis nemo
        libero dolore provident dolorem ducimus et quis similique possimus quae
      </div>
    </DropDownContainer>
  );
};

export default MobileDropDown;
