import React from "react";
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";

// Python에서 받을 props 타입
interface PythonArgs {
  imageUrl?: string;
  width?: number;
  height?: number;
}

class MyComponent extends StreamlitComponentBase {
  // 버튼 클릭 핸들러
  private handleButtonClick = (region: string) => {
    Streamlit.setComponentValue(region);
  };

  public render = () => {
    const args = this.props.args as PythonArgs;

    // Python에서 받은 값 또는 기본값 (경로 보정)
    const imageUrl = args.imageUrl?.startsWith("/")
      ? args.imageUrl
      : "/" + (args.imageUrl || "test_img.png");
    const width = args.width || 600;
    const height = args.height || 400;

    // 버튼 좌표
    const buttons = [
      { name: "서울", top: 100, left: 150, color: "rgba(255,0,0,0.5)" },
      { name: "부산", top: 250, left: 300, color: "rgba(0,0,255,0.5)" },
      { name: "대구", top: 150, left: 450, color: "rgba(0,255,0,0.5)" },
    ];

    return (
      <div style={{ position: "relative", width, height }}>
        {/* 지도 이미지 */}
        <img
          src={imageUrl}
          alt="map"
          style={{ width: "100%", height: "100%", display: "block" }}
        />

        {/* 버튼 렌더링 */}
        {buttons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => this.handleButtonClick(btn.name)}
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
}

export default withStreamlitConnection(MyComponent);
