import React from 'react';
import './Flow.css';
import seqImg from '../assets/images/sequence.png'; // 이미지 경로만 맞춰주세요!

const Flow = () => {
  return (
    <div className="flowRootContainer">
      <div className="flowCard">
        <div className="titleWrapper">
          <h3 className="simpleTitle">System Sequence</h3>
        </div>


          <div className="flowItem">
            <img src={seqImg} alt="Flow Logic" className="flowImg" />
          </div>

      </div>
    </div>
  );
};

export default Flow;