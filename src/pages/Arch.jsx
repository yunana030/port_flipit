import React from 'react';
import "./Arch.css";
import arch1 from '../assets/images/arch1.png';
import arch2 from '../assets/images/arch2.png';


const Arch = () => {
  return (
    <div className="archRootContainer">
      <div className="archCard">
        {/* 아이콘은 hub나 account_tree 원하시는 걸로! */}
        <h3 className="simpleTitle">Service Architecture</h3>
        
        <div className="archFlexWrapper">
          <div className="archItem">
             <img src={arch1} alt="Architecture 1" className="archImg" />
          </div>
          <div className="archItem">
             <img src={arch2} alt="Architecture 2" className="archImg" />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Arch;

