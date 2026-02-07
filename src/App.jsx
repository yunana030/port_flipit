import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WindowFrame from './components/windowFrame';
import MainHome from './pages/MainHome';
// 1. Flow 컴포넌트를 불러옵니다!
import Flow from './pages/Flow'; 
import './App.css';
import ERD from './pages/erd';
import Arch from './pages/Arch';
import Troubleshooting from './pages/Troubleshooting';
import Gallery from './pages/Gallery';

function App() {
  const [activeTab, setActiveTab] = useState('Main');

  return (
    <div className="screenWrapper">
      <div className="mainLayout">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* 사이드바에사 보낸 id와 같아야 함! */}
        <div className="windowArea">
         <WindowFrame title={activeTab.toUpperCase()}>
          {/* && 연산자는 "조건이 맞으면 뒤의 컴포넌트를 보여줘라"라는 뜻이에요! */}
          {activeTab === 'Main' && <MainHome />}
          {activeTab === 'SEQUENCE' && <Flow />}
          {activeTab === 'ERD / UseCase' && <ERD />}
          {activeTab === 'ARCHITECTURE' && <Arch />}
          {activeTab === 'Trouble Shooting' && <Troubleshooting />}
          {activeTab === 'Gallery' && <Gallery />}
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