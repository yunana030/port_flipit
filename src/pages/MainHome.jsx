import React from 'react';
import './MainHome.css';

const MainHome = () => {
  return (
    <>
      {/* 1. 상단 배너 섹션 */}
      <div className="banner">
        <div className="dotPattern"></div>
        <div className="relative z-10 flex w-full h-full p-4 items-center justify-between">
          <div className="flex items-center gap-8 pl-8">
            <img alt="Project Mascot" className="w-44 h-44 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVQtC7esOaKXLoAKxei5-fRZY3MPYcSR4zMN5wJ_T-Z2mJbGZQ2QsqNvIFhkm0BBDYF5d40kT-yVaFZBCyKt6Z50YyWTEMSSs_0_s5yYm6h1w7w6dCurJLNSe6lSg1itAQCv1rSqDACo1MjTQq9iyRx0uOB-TWGnei_DqmXa6IMX2h3OJE-76KOnPYayXpTyqAfBWkQNDu7tH6CLgxgq4JwWFA6GBkZRTCQ4G5YFHuVIrVwsYylFKj76T-T012vk9kFPny3jOfjGI"/>
            <div>
              <h1 className="font-display text-5xl text-retro-blue leading-none mb-2">RETRO_SYSTEM_PRO</h1>
              <p className="text-retro-blue/60 font-mono text-xs">Anthology Edition v2.5</p>
            </div>
          </div>
          <div className="pr-8">
            <img alt="Secondary Logo" className="h-40 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFL-sIWjDflWdXxdca_hfQ6UIfNh3YqxuZ4o3ACo6A4uib5H0MNg_TmnoYcnMK3R7RKnr6ClOSklhQUREXBzHiqv3cOu1Ua1h-Fq5pctcyJGk1mfg1uGLpzkmCJDF4mBmWm4lUcsMZmxdcCN8dpLXd-1nJvOeJTf2NUtViCij8ROWNxCI2697B7VzVv6T7BhJP9k-dWNqUPXl3dp_EVfpR3VTgNgCnf29ctJR9rZVgkrkJOYcaKXhjXrSWnqKNz2zoiyKrQ2Hhj1Y"/>
          </div>
        </div>
      </div>

      {/* 2. 하단 그리드 섹션 */}
      <div className="mainGrid">
        <div className="leftCol">
          {/* 연락처 박스 */}
          <div className="card">
            <h3 className="cardTitle">연락처 (CONTACT)</h3>
            <div className="space-y-4">
              <ContactItem icon="alternate_email" label="X (Twitter)" value="@dt2025anth" />
              <ContactItem icon="mail" label="Email" value="dt2025anth@gmail.com" />
            </div>
          </div>

          {/* D-Day 박스 */}
          <div className="ddayCard">
            <p className="text-[10px] text-retro-blue font-bold uppercase mb-1">2025. 04. 25</p>
            <h2 className="ddayBigText">D-110</h2>
            <div className="progressBar">
              {[1, 2, 3, 4].map(i => <div key={i} className="progressBlock"></div>)}
              <div className="progressBlock progressBlockDim"></div>
              <div className="progressBlock progressBlockEmpty"></div>
            </div>
            <div className="w-full flex justify-between mt-1 text-[8px] font-mono text-retro-blue/50 uppercase">
              <span>Start</span><span>Finish</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 새소식 */}
        <div className="rightCol">
          <div className="card h-full">
            <div className="flex justify-between items-center mb-6 border-b border-retro-blue/20 pb-2">
              <h3 className="font-sans text-xs font-bold text-retro-blue">새소식 (LATEST UPDATES)</h3>
              <button className="text-[10px] text-retro-blue font-bold hover:underline">더보기 +</button>
            </div>
            <div className="space-y-5">
              <UpdateItem date="02-24" title="방명록 이벤트 안내 (Visitor Guestbook Event)" />
              <UpdateItem date="02-23" title="앤솔로지 홈페이지 개설 (Portfolio Site Launch)" />
              <UpdateItem date="02-20" title="기술 문서 업데이트 (DFD & ERD Section Updated)" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 연락처 아이템 (이건 내부적으로 테일윈드 섞어 쓰셔도 무방해서 그대로 뒀습니다)
const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-7 h-7 bg-retro-blue/10 flex items-center justify-center border border-retro-blue/20">
      <span className="material-symbols-outlined text-retro-blue text-sm">{icon}</span>
    </div>
    <div className="text-[11px]">
      <p className="text-slate-400 leading-none mb-1">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  </div>
);

// 새소식 아이템
const UpdateItem = ({ date, title }) => (
  <div className="updateItem">
    <span className="dateTag">{date}</span>
    <h4 className="text-xs font-semibold text-slate-600 hover:text-retro-blue transition-colors">{title}</h4>
  </div>
);

export default MainHome;