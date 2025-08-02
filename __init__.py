import os
import streamlit.components.v1 as components

# 개발 모드 여부 (React 개발 서버 실행 시 False, 배포 시 True)
_RELEASE = False

if not _RELEASE:
    # React 개발 서버 URL (npm start로 실행 중일 때)
    _component_func = components.declare_component(
        "image_button_component",
        url="http://localhost:3001",
    )
else:
    # 배포 모드: 빌드된 정적 파일 경로
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component(
        "image_button_component",
        path=build_dir,
    )

def image_button_component(imageUrl: str, width: int = 600) -> str:
    """
    이미지 위 버튼을 제공하는 커스텀 컴포넌트

    Args:
        imageUrl (str): 지도 이미지 파일 경로 또는 URL
        width (int): 이미지 표시 폭(px)

    Returns:
        str: React 컴포넌트에서 선택한 지역명
    """
    return _component_func(imageUrl=imageUrl, width=width)
