import React from "react";

// 테스트용 props 타입
interface TestProps {
  imageUrl?: string;
  width?: number;
  height?: number;
}

const TestComponent: React.FC<TestProps> = ({
  imageUrl,
  width = 600,
  height = 400,
}) => {
  // 기본 이미지 경로 설정
  const defaultImageUrl = imageUrl || "/test_img.png";
  // 버튼 클릭 핸들러
  const handleButtonClick = (region: string) => {
    console.log(`선택한 지역: ${region}`);
    alert(`선택한 지역: ${region}`);
  };

  // 버튼 좌표
  const buttons = [
    { name: "서울", top: 100, left: 150, color: "rgba(255,0,0,0.5)" },
    { name: "부산", top: 250, left: 300, color: "rgba(0,0,255,0.5)" },
    { name: "대구", top: 150, left: 450, color: "rgba(0,255,0,0.5)" },
  ];

  return (
    <div
      style={{ position: "relative", width, height, border: "2px solid #ccc" }}
    >
      {/* 지도 이미지 */}
      <img
        src={defaultImageUrl}
        alt="map"
        style={{ width: "100%", height: "100%", display: "block" }}
        onError={(e) => {
          console.warn("이미지 로딩 실패:", defaultImageUrl);
          console.warn("시도한 경로:", e.currentTarget.src);
          e.currentTarget.style.border = "2px solid red";
          e.currentTarget.style.backgroundColor = "#f0f0f0";
          // 간단한 대체 이미지 사용
          e.currentTarget.src =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIExvYWQgRmFpbGVkPC90ZXh0Pjwvc3ZnPg==";
        }}
        onLoad={() => {
          console.log("이미지 로딩 성공:", defaultImageUrl);
        }}
      />

      {/* 버튼 렌더링 */}
      {buttons.map((btn) => (
        <button
          key={btn.name}
          onClick={() => handleButtonClick(btn.name)}
          title={btn.name}
          style={{
            position: "absolute",
            top: btn.top,
            left: btn.left,
            width: 50,
            height: 50,
            backgroundColor: "transparent",
            border: `2px solid ${btn.color}`,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

export default TestComponent;
