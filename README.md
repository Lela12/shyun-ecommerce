# Project Overview
### π SHYUN-Ecommerce
- E-commerce ννμ μΉ μλΉμ€λ₯Ό κΈ°λ³Έ κΈ°λ₯ κ΅¬νμ μ§μ€νμ¬ μ§νν νλ‘μ νΈμλλ€.
- μλ λ§ν¬μμ νλ‘μ νΈ λ°λͺ¨ νμΈ κ°λ₯ν©λλ€.
- [SHYUN](https://lela12.github.io/shyun-ecommerce/)
#### π κΈ°μ μ€ν
- HTML5/ CSS3
- Javascript(E6+)
- React
- Styled-Component

---
## πͺ λ©μΈνλ©΄
![navbar](https://user-images.githubusercontent.com/92790783/152686413-a9fbc4e7-1404-4008-a17d-b0d246093e6c.gif)
  - λ‘κ·ΈμΈ, νμκ°μ, μ₯λ°κ΅¬λλ‘ ν₯ν  μ μλ λ©λ΄λ€μ΄ μμ΅λλ€.
  - Navbarμμ register(/register), sign in(/login), μ₯λ°κ΅¬λ(/cart) μμ΄μ½ ν΄λ¦­μ κ°κ°μ νμ΄μ§λ‘ μ΄λνκ² λ©λλ€.

## πͺ μ¬λΌμ΄λ
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
  - λ§¨ λ§μ§λ§ μ¬λΌμ΄λ νμ΄μ§κ° λμ¨ ν λ€μ μ²« νμ΄μ§λ‘ μ΄λνκ² λλ€.
  - useStateλ₯Ό μ΄μ©ν΄ 0λ³΄λ€ ν¬λ©΄ νμ¬ μ¬λΌμ΄λ μμΉμμ -1μ, 0λ³΄λ€ μλ€λ©΄ λ§¨ λμ μμΉν 2λ‘ μ΄λνκ² λ§λ€μ΄μ€λ€. λν 2λ³΄λ€ μμ κ²½μ° +1μ, 2λ³΄λ€ ν΄κ²½μ° 0μΌλ‘ μ΄λνκ² λ§λ€μ΄μ€λ€. 


## πͺ λ°μν μΉ
<img width="500" alt="web" src="https://user-images.githubusercontent.com/92790783/152686767-615d52cd-2982-4f63-b63d-44ecac4925e0.png"> <img width="182" alt="νλ©΄ μΊ‘μ² 2022-02-07 000034" src="https://user-images.githubusercontent.com/92790783/152686941-01d30ada-274e-4e8f-a2c3-28b42a31dc6d.png">
 - λ°μ€ν¬ν, λͺ¨λ°μΌ(iphone 6/7/8) μμΌλ‘ λ°μν μΉμ κ΅¬ννμμ΅λλ€. 
 
 
 





