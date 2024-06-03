
import React, { Suspense } from "react";

//import Popup from "reactjs-popup";


const Footer: React.FC = () => {

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      
      <div className="socials flex gap-10 ">
        
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        </Suspense>
      </div>
    </footer>
  );
};

export default Footer;
