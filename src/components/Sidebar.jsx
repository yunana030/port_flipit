import React from 'react';
import './Sidebar.css'; // 일반 CSS 파일 불러오기

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'Main', icon: 'grid_view' },
    { id: 'DFD', icon: 'description' },
    { id: 'ERD', icon: 'account_tree' },
    { id: 'Fixes', icon: 'terminal' },
    { id: 'Gallery', icon: 'mail' }
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
          <span className="menuLabel">{item.id}</span>
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;