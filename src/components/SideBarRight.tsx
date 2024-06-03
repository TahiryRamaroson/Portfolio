
import React from "react";

const SiteBarLeft: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[50vh] max-lg:hidden ">
      <div className="flex items-center justify-center flex-col h-[70%] ">
        <div className=" w-[0.25rem] h-[100%] bg-[--lightblue]"></div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
