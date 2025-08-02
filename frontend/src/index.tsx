import React from "react";
import ReactDOM from "react-dom/client";
import TestComponent from "./test_component";

console.log("🚀 React 앱 시작됨");

const rootElement = document.getElementById("root");
console.log("🔍 Root element:", rootElement);

if (rootElement) {
  console.log("✅ Root element 찾음, React 렌더링 시작");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TestComponent />
    </React.StrictMode>
  );
  console.log("✅ React 렌더링 완료");
} else {
  console.error("❌ Root element not found in index.html");
}
