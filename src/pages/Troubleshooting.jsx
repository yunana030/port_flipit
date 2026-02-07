import React from 'react';
import './Troubleshooting.css';

const Troubleshooting = () => {
  return (
    <div className="troubleRootContainer">
      <div className="troubleCard">
        <div className="titleWrapper">
          <h3 className="simpleTitle">Trouble Shooting</h3>
        </div>

        <div className="troubleTable">
          {/* 상황 섹션 */}
          <div className="troubleRow">
            <div className="troubleTextSide">
              <span className="troubleTag status">상황</span>
              <p>
                DB에서 게임 단계를 추가했음에도 프론트엔드에서 새로운 스테이지가 나타나지 않거나, 
                마지막 단계를 인식하지 못하고 랭킹 페이지로 이동하는 현상이 발생했습니다.
              </p>
            </div>
            <div className="troubleCodeSide">
              <div className="codeLabel">수정 전 코드</div>
              <pre>
{`// 단순히 다음 숫자만 리턴
int nextStage = record.getLaststage() + 1;

return new GameProgressResponseDTO(
    true,
    nextStage
);`}
              </pre>
            </div>
          </div>

          {/* 해결 섹션 */}
          <div className="troubleRow">
            <div className="troubleTextSide">
              <span className="troubleTag solve">해결</span>
              <p>
                <strong>[동적으로 최대 단계 조회]</strong> 서버가 항상 최신 DB 구성을 파악하도록 수정했습니다. 
                또한 실제 데이터 검증 로직을 도입하여 특정 스테이지 조회 시에, 단순 숫자 비교가 아닌 <strong>실제 카드 배치 데이터가 존재하는 지</strong> 
                확인하는 절차를 도입하였습니다. 데이터가 없는 경우를 명확하게 예외 처리해 안정성을 확보했습니다.
              </p>
            </div>
            <div className="troubleCodeSide">
              <div className="codeLabel blue">수정 후 코드</div>
              <pre>
{`// 동적 최대 단계(maxStage) 비교 도입
boolean isLastStage = record.getLaststage() >= maxStage;

return GameProgressResponseDTO.builder()
        .exists(true)
        .stage(record.getLaststage())
        .maxStage(maxStage)
        .isLastStage(isLastStage)
        .build();`}
              </pre>
            </div>
          </div>

          {/* 알게 된 점 섹션 */}
          <div className="troubleRow lessonRow">
            <div className="troubleTextSide fullWidth">
              <span className="troubleTag lesson">알게 된 점</span>
              <p>
                처음에는 단순히 기능을 구현하는 것에만 집중해 로직을 너무 간단하게 생각하고 구현하였습니다.
                문제를 해결하기 위해 실제 DB에 데이터가 존재하는지 확인하는 검증 로직을 추가하면서, 
                <strong>데이터베이스와 로직 사이의 정합성</strong>을 맞추는 과정의 중요성을 깨달았습니다.
                아무리 단순한 기능이라도 <strong>실제 데이터를 검증하는 절차</strong>가 시스템 안정성의 
                핵심이라는 점을 깊이 상기할 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;