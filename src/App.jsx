import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WindowFrame from './components/windowFrame';
import MainHome from './pages/MainHome';
import './App.css'; // 일반 CSS 임포트

function App() {
  const [activeTab, setActiveTab] = useState('Main');

  return (
    <div className="screenWrapper">
      <div className="mainLayout">
        
        {/* 사이드바 컴포넌트 */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 메인 윈도우 영역 */}
        <div className="windowArea">
          <WindowFrame title={activeTab.toUpperCase()}>
            {activeTab === 'Main' ? (
              <MainHome />
            ) : (
              <div className="text-2xl font-display p-10">
                {activeTab} Page Ready.
              </div>
            )}
          </WindowFrame>
        </div>
      </div>

      {/* 테마 변경 버튼 */}
      <button className="paletteBtn">
        <span className="material-symbols-outlined text-retro-blue">palette</span>
      </button>
    </div>
  );
}

export default App;