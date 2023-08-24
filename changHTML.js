let title = document.querySelector("#title");
// ? 1st method
if (title != null) {
    title.innerHTML = "hello";
}
// ? 2nd method
if (title instanceof Element) {
    //* 중요
    title.innerHTML = "fuck you";
}
// ? 3rd method
let title2 = document.querySelector("#title"); // cheating?
title2.innerHTML = "how are you";
// ? 4th method _ optional chaining
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = "fuck you";
}
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = "sorry";
}
// ? 5th method _ config option disable
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://naver.com";
}
let btn = document.querySelector("#button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    title2.innerHTML = "hi";
});
// TODO : (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다.
// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?
// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
let img = document.querySelector("#img");
if (img instanceof HTMLImageElement) {
    img.src = "./complete";
    img.alt = "complete";
}
// TODO : (숙제2) 바꾸고 싶은 html 요소가 많습니다.
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
// 자바스크립트 코드를 어떻게 짜야할까요?
let naver = document.querySelector(".naver");
if (naver instanceof HTMLAnchorElement) {
    naver.href = "https://github.com";
}
// ? solution
let 링크 = document.querySelectorAll(".naver");
// console.log(typeof 링크)
링크.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
for (let i = 0; i < 3; i++) {
    let a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
}
