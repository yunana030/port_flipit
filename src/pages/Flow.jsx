import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import "./Flow.css";

const Flow = () => {
  useEffect(() => {
    // 설정을 최소화하여 외부 CSS(Flow.css)가 잘 먹히도록 합니다.
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base', 
      securityLevel: 'loose',
      fontFamily: 'Pretendard, sans-serif',
    });
    // 렌더링을 확실히 하기 위해 호출
    mermaid.contentLoaded();
  }, []);

  const chartCode = `
    sequenceDiagram
      autonumber
      actor User
      participant Client
      participant Server

      activate User
      User->>Client: 1. GameStart (동기 호출)
      
      activate Client
      Client->>Server: 2. 유저 기록 조회 (비동기 호출)
      activate Server
      Server-->>Client: 3. 결과 응답 (비동기 응답)
      deactivate Server

      alt 이어하기 기능 여부 분기
          Client->>User: 4-A. 이어하기 (동기 응답)
      else
          Client->>User: 4-B. 처음부터 (동기 응답)
      end
      
      Client->>User: 5. 카드 2초 공개 (동기 응답, client 내부)
      Client->>User: 6. 게임 진행 (동기 응답)
      
      User->>Client: 7. NextStage (동기 호출)
      
      Client->>Server: 8. 결과 저장 + 단계 계산 (비동기 호출)
      activate Server
      Server-->>Client: 9. 결과 응답 (비동기 응답)
      deactivate Server

      alt 단계 검증 분기 [current >= maxStage]
          Client->>User: 10-A. 랭킹 페이지 이동 (동기 응답)
          deactivate User
      else
          Client->>Server: 10-B. 결과 저장 + 단계 계산 (비동기 호출)
          activate Server
          Server-->>Client: 11. 결과 응답 (비동기 응답)
          deactivate Server
      end

      Client->>User: 12. NextStage (동기 응답)
      deactivate Client
  `;

  return (
    <div className="flowRootContainer">
      <div className="flowCard">
        {/* ERD와 똑같은 스타일의 제목! */}
        <div className="titleWrapper">
          <h3 className="simpleTitle">GAME LOGIC SEQUENCE</h3>
        </div>
        
        <div className="mermaidContainer">
          <div className="mermaid">
            {chartCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;