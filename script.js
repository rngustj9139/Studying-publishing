let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll(".nav-item"); // (배열과 비슷한 nodeList가 반환된다) querySelector(#id) => id 값 id를 가진 요소를 찾습니다. querySelector(.class) => class 값 class를 가진 요소를 찾습니다.

console.log(horizontalUnderLine); // 개발자도구 => console => 오른쪽 아래에서 확인 가능, 혹은 vs코드 아래의 디버그 콘솔에서 확인 가능.
console.log(horizontalMenus);

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px"; // offsetLeft는 모니터 모서리와 메뉴 요소의 왼쪽부분의 사이 거리이다
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px"; // offsetWidth는 메뉴요소의 가로 길이이다.
    horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px"; // offsetTop은 모니터 모서리와 메뉴 요소의 위쪽 부분의 사이 거리이다.
}

horizontalMenus.forEach((menu) => 
    menu.addEventListener("click", (e) => horizontalIndicator(e))
); // 각각의 메뉴버튼마다 클릭 이벤트가 발생할 때 마다, horizontalIndicator 함수를 실행
