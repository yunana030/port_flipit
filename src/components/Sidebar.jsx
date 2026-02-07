import React from 'react';
import './Sidebar.css'; // 일반 CSS 파일 불러오기

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Main', icon: 'grid_view' },
    { id: 'SEQUENCE', icon: 'description' },
    { id: 'ERD / UseCase', icon: 'account_tree' },
    { id: 'Trouble Shooting', icon: 'auto_fix_high' },
    { id: 'Gallery', icon: 'photo_library' }
  ];

  return (
    <nav className="sidebarNav">
      
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className="menuButton"
        >
          {/* activeTab 조건에 따라 active/inactive 클래스만 갈아끼웁니다 */}
          <div className={`iconWrapper ${activeTab === item.id ? 'active' : 'inactive'}`}>
            <span className="material-symbols-outlined retroIcon">
              {item.icon}
            </span>
          </div>
          {/* 아이콘 이름 */}
          <span className="menuLabel">{item.id}</span>  
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;