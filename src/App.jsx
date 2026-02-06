import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WindowFrame from './components/windowFrame';
import MainHome from './pages/MainHome';
// 1. Flow 컴포넌트를 불러옵니다!
import Flow from './pages/Flow'; 
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Main');

  return (
    <div className="screenWrapper">
      <div className="mainLayout">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="windowArea">
          <WindowFrame title={activeTab.toUpperCase()}>
            {/* 2. 조건문을 확장합니다 */}
            {activeTab === 'Main' ? (
              <MainHome />
            ) : activeTab === 'DFD' ? (
              <Flow /> /* DFD 탭을 누르면 우리가 만든 Flow가 뜹니다! */
            ) : (
              <div className="text-2xl font-display p-10">
                {activeTab} Page Ready.
              </div>
            )}
          </WindowFrame>
        </div>
      </div>

      <button className="paletteBtn">
        <span className="material-symbols-outlined text-retro-blue">palette</span>
      </button>
    </div>
  );
}

export default App;