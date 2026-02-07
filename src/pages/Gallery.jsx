import React, { useRef, useEffect } from 'react';
import './Gallery.css';

import img1 from '../assets/images/main.png';
import img2 from '../assets/images/sign.png';
import img3 from '../assets/images/game.png';
import img4 from '../assets/images/ranking.png';
import img5 from '../assets/images/addcard.png';
import img6 from '../assets/images/admin.png';

const Gallery = () => {
  const images = [
    { id: 1, src: img1, title: "Main Dashboard" },
    { id: 2, src: img2, title: "Sign In / Up" },
    { id: 3, src: img3, title: "Game Play" },
    { id: 4, src: img4, title: "Ranking System" },
    { id: 5, src: img5, title: "Card Customization" },
    { id: 6, src: img6, title: "Admin Management" },
  ];

  // 무한 루프를 위해 앞뒤로 넉넉히 복제 (총 3세트)
  const tripleImages = [...images, ...images, ...images];
  const trackRef = useRef(null);
  const posRef = useRef(0); // 현재 위치 저장
  const requestRef = useRef(); // 애니메이션 프레임 저장
  const isPaused = useRef(false); // 일시정지 상태

  // 1. 매 프레임마다 움직이는 애니메이션 함수
  const animate = () => {
    if (!isPaused.current && trackRef.current) {
      const itemWidth = trackRef.current.querySelector('.galleryItem').offsetWidth + 30;
      const totalWidth = itemWidth * images.length;

      posRef.current -= 2; // ★이 숫자를 조절해서 전체 속도를 정합니다 (2~3 추천)

      // 한 세트가 다 지나가면 다시 중간 세트 시작점으로 순간이동 (무한 루프)
      if (posRef.current <= -totalWidth * 3) {
        posRef.current += totalWidth;
      }
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // 시작할 때 일단 중간 세트 위치로 이동
    const itemWidth = trackRef.current.querySelector('.galleryItem').offsetWidth + 30;
    posRef.current = -(itemWidth * images.length);
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // 2. 썸네일 클릭 시 정확한 위치로 이동 로직
  const handleNavClick = (index) => {
    isPaused.current = true; // 잠시 멈춤
    const itemWidth = trackRef.current.querySelector('.galleryItem').offsetWidth + 30;
    
    // 타겟 위치: 중간 세트의 해당 이미지 인덱스
    const targetPos = -(itemWidth * (images.length + index));
    
    trackRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    trackRef.current.style.transform = `translateX(${targetPos}px)`;
    posRef.current = targetPos;

    // 이동 완료 후 다시 흐르게 함
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        isPaused.current = false;
      }
    }, 2000);
  };

  return (
    <div className="galleryRootContainer">
      <div className="galleryCard">
        <div className="titleWrapper"><h3>GALLERY</h3></div>

        <div className="thumbnailBar">
          {images.map((img, idx) => (
            <div key={img.id} className="thumbItem" onClick={() => handleNavClick(idx)}>
              <img src={img.src} alt="thumb" className="thumbImg" />
            </div>
          ))}
        </div>

        <div 
          className="galleryImageContent"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          <div className="animate-track" ref={trackRef}>
            {tripleImages.map((img, index) => (
              <div key={index} className="galleryItem">
                <img src={img.src} alt={img.title} className="galleryImg" />
                <div className="hoverOverlay"><span className="hoverTitle">{img.title}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;