# Project Overview
### 👗 SHYUN-Ecommerce
- E-commerce 형태의 웹 서비스를 기본 기능 구현에 집중하여 진행한 프로젝트입니다.
- 아래 링크에서 프로젝트 데모 확인 가능합니다.
- [SHYUN](https://lela12.github.io/shyun-ecommerce/)
#### 📖 기술스택
- HTML5/ CSS3
- Javascript(E6+)
- React
- Styled-Component

---
## 🪄 메인화면
![navbar](https://user-images.githubusercontent.com/92790783/152686413-a9fbc4e7-1404-4008-a17d-b0d246093e6c.gif)
  - 로그인, 회원가입, 장바구니로 향할 수 있는 메뉴들이 있습니다.
  - Navbar에서 register(/register), sign in(/login), 장바구니(/cart) 아이콘 클릭시 각각의 페이지로 이동하게 됩니다.

## 🪄 슬라이드
![slider](https://user-images.githubusercontent.com/92790783/152686420-67c34615-6926-4210-b33c-6464d0ac7544.gif)
   ```
   const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
   ```
  - 맨 마지막 슬라이드 페이지가 나온 후 다시 첫 페이지로 이동하게 된다.
  - useState를 이용해 0보다 크면 현재 슬라이드 위치에서 -1을, 0보다 작다면 맨 끝의 위치한 2로 이동하게 만들어준다. 또한 2보다 작을 경우 +1을, 2보다 클경우 0으로 이동하게 만들어준다. 


## 🪄 반응형 웹
<img width="500" alt="web" src="https://user-images.githubusercontent.com/92790783/152686767-615d52cd-2982-4f63-b63d-44ecac4925e0.png"> <img width="182" alt="화면 캡처 2022-02-07 000034" src="https://user-images.githubusercontent.com/92790783/152686941-01d30ada-274e-4e8f-a2c3-28b42a31dc6d.png">
 - 데스크탑, 모바일(iphone 6/7/8) 순으로 반응형 웹을 구현하였습니다. 
 
 
 





