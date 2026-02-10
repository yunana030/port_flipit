import React from 'react';
import './MainHome.css';
import mainImg from '../assets/images/image 32.png';


const MainHome = () => {
  return (
    <>
      <div className="banner relative overflow-hidden"> 
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${mainImg})`,
            filter: 'blur(1px)',
            opacity: 0.7,
            transform: 'scale(1.1)'// blur 처리 시 가장자리 흰 선 생기는 거 방지 
          }}
        ></div>
        <div className="relative z-10 flex w-full h-full p-4 items-center justify-between">
          <div className="flex items-center gap-8 pl-8">
            <div>
              <h1 className="font-display text-5xl text-retro-blue leading-none mb-2 drop-shadow-lg">
                FlipIt!
              </h1>
              <p className="welcome-sub font-sans italic">
                "Thanks for stopping by.<br />
                Wishing you a day as special as you are."
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 right-8">
            <a 
              href="https://yunana030.github.io/nanaful_day/" 
              className="group flex flex-col items-end gap-1 no-underline"
            >
              <span className="text-[10px] text-white/70 font-mono tracking-[0.2em] group-hover:text-white/80 transition-colors">
                RETURN TO INDEX
              </span>
              <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 group-hover:bg-white/60 transition-all duration-300"></div>
              <span className="text-[12px] text-white/80 font-light tracking-tighter group-hover:text-white group-hover:translate-x-[-4px] transition-all">
                Back portfolio
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. 하단 그리드 섹션 */}
      <div className="mainGrid">
        <div className="leftCol">
          <div className="card">
            <h3 className="cardTitle">DEVELOPMENT ENVIRONMENT</h3>
            <div className="space-y-4">
              
              {/* 1. Frontend */}
              <ContactItem 
                icon="code" 
                label="Frontend" 
                value={
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-[#61DAFB]/20 border border-[#61DAFB]/30 text-[#61DAFB] text-[11px] rounded">React</span>
                    <span className="px-2 py-0.5 bg-[#5A29E4]/20 border border-[#5A29E4]/30 text-[#5A29E4] text-[11px] rounded">Axios</span>
                    <span className="px-2 py-0.5 bg-[#443E38]/20 border border-[#443E38]/30 text-[#443E38] text-[11px] rounded">Zustand</span>
                  </div>
                } 
              />
              {/* 2. Backend */}
              <ContactItem 
                icon="settings" 
                label="Backend" 
                value={
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-[#6DB33F]/20 border border-[#6DB33F]/30 text-[#6DB33F] text-[11px] rounded">SpringBoot</span>
                    <span className="px-2 py-0.5 bg-[#B07219]/20 border border-[#B07219]/30 text-[#B07219] text-[11px] rounded">JPA</span>
                    <span className="px-2 py-0.5 bg-[#FE2D33]/20 border border-[#FE2D33]/30 text-[#FE2D33] text-[11px] rounded">IntelliJ</span>
                  </div>
                } 
              />
              {/* 3. Database */}
              <ContactItem 
                icon="database" 
                label="DB" 
                value={
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-[#4479A1]/20 border border-[#4479A1]/30 text-[#4479A1] text-[11px] rounded">MySQL</span>
                  </div>
                } 
              />
            </div>
          </div>

          <div className="ddayCard">
            {/* 1. 날짜 정렬: br 대신 flex로 중앙 정렬 */}
            <div className="flex flex-col items-center text-[14px] text-retro-blue font-bold uppercase mb-1 leading-tight">
              <span>2025. 11. 25</span>
              <span className="opacity-50 text-[8px]">~</span>
              <span>2025. 12. 11</span>
            </div>

            <h2 className="ddayBigText text-center">17 DAYS</h2>

            <div className="progressBar">
              {Array.from({ length: 34 }).map((_, i) => (
                <div key={i} className="progressBlock"></div>
              ))}
            </div>

            <div className="w-full flex justify-between mt-1 text-[8px] font-mono text-retro-blue/50 uppercase">
              <span>Start</span>
              <span>Finish</span>
            </div>
          </div>
        </div>

        <div className="rightCol">
          <div className="card h-full flex flex-col">
            {/* 헤더 */}
            <div className="flex justify-between items-center mb-4 border-b border-retro-blue/20 pb-2">
              <h3 className="font-sans text-[11px] font-bold text-retro-blue">DEMO VIDEO</h3>
              <span className="text-[9px] text-retro-blue/60 font-mono anim-pulse">REC ●</span>
            </div>

            {/* 메인 가로 콘텐츠 영역 */}
            <div className="flex flex-row gap-4 items-center flex-1">
              
              {/* 썸네일 박스 (노란색 큰 박스 영역) */}
             {/* 썸네일 박스 */}
              <div className="w-3/5 aspect-video relative group overflow-hidden rounded-md border border-retro-blue/20 bg-black">
              <a 
                href="https://www.youtube.com/watch?v=4xL2Qi9LZPc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img 
                  src="https://img.youtube.com/vi/4xL2Qi9LZPc/hqdefault.jpg"
                  alt="Thumbnail"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all"
                />
              </a>
            </div>

              {/* [오른쪽] 컨트롤러 영역 (재생바와 버튼들) */}
              <div className="w-2/5 flex flex-col justify-center gap-4">
                {/* 버튼들 (그림의 위쪽 버튼 위치) */}
                <div className="flex justify-center items-center gap-4 text-retro-blue">
                  <button className="hover:scale-110 transition-transform text-[20px]">⏮</button>
                  <button className="hover:scale-110 transition-transform text-[30px]">▶</button>
                  <button className="hover:scale-110 transition-transform text-[20px]">⏭</button>
                </div>

                {/* 재생바 (노란색 긴 가로바 위치) */}
                <div className="play-center-overlay">
                  <div className="play-circle">
                    <div className="play-icon-triangle"></div>
                  </div>
                </div>
                {/* 깨알 상태 메시지 */}
                <p className="text-[13px] text-slate-400 text-center font-mono italic">
                  NOW PLAYING...
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 연락처 아이템
const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-7 h-7 bg-retro-blue/10 flex items-center justify-center border border-retro-blue/20">
      <span className="material-symbols-outlined text-retro-blue text-sm">{icon}</span>
    </div>
    <div className="text-[11px]">
      <p className="text-slate-600 font-bold text-[14px] leading-none mb-1">{label}</p>
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