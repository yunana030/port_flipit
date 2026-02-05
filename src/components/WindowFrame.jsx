import React from 'react';
import './WindowFrame.css'; // 일반 CSS 파일 불러오기

const WindowFrame = ({ title, children }) => {
  return (
    <div className="windowOuter">
      {/* 타이틀 바 */}
      <div className="titleBar">
        <div className="flex items-center gap-2">
          <span className="titleText">
            PROJECT_{title}_BROWSER.EXE
          </span>
        </div>
        <div className="flex gap-1">
          <button className="controlBtn">
            <span className="material-symbols-outlined controlIcon">minimize</span>
          </button>
          <button className="controlBtn">
            <span className="material-symbols-outlined controlIcon">close</span>
          </button>
        </div>
      </div>

      {/* 메뉴 바 */}
      <div className="menuBar">
        {['File', 'Edit', 'View', 'Help'].map((menu) => (
          <span key={menu} className="menuItem">{menu}</span>
        ))}
      </div>

      {/* 알맹이 영역 */}
      <div className="contentArea">
        {children}
      </div>

      {/* 상태바 */}
      <div className="statusBar">
        <div className="flex items-center gap-4 uppercase">
          <span className="statusReady">System Ready</span>
          <span>|</span>
          <span>C:\PORTFOLIO\{title}_SCREEN.HTML</span>
        </div>
        <span>OPTIMIZED FOR 1920x1080</span>
      </div>
    </div>
  );
};

export default WindowFrame;