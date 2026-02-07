import React from 'react';
import './ERD.css';
import erdImg from '../assets/images/erd.png';
import usecaseImg from '../assets/images/usecase.png';

const ERD = () => {
  return (
    <div className="diagramRootContainer">

      {/* UseCase 섹션 */}
      <div className="diagramCard">
        <h3 className="simpleTitle">Use Case</h3>
        <div className="imgWrapper">
          <img src={usecaseImg} alt="UseCase" className="fitImg" />
        </div>
      </div>

      {/* ERD 섹션 */}
      <div className="diagramCard">
        <h3 className="simpleTitle">Entity Relationship Diagram</h3>
        <div className="imgWrapper">
          <img src={erdImg} alt="ERD" className="fitImg" />
        </div>
      </div>

      
    </div>
  );
};

export default ERD;