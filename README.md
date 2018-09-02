# 카카오IX 과제

## Build Setup

``` bash
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## demo
[데모](http://haeru.azurewebsites.net)

## 소개

처음엔 순수 마크업과 웹 프레임워크 중 어떤 식으로 코딩해야할까 고민하였습니다.
<br>그러다 사이트 이리저리 살펴보니, 웹 프레임워크를 사용한 흔적들이 보였습니다.
<br>저 또한 최근 vue 프로젝트를 공부하고 사용해보면서, 자동화나 es6에 관심이 생긴 상태였습니다.
<br>그래서 HTML, CSS, JAVASCRIPT(jQuery)로만 구성된 퍼블리싱 형식보다는, 아직 많이 부족할 수도 있지만 웹 프레임워크를 사용한 마크업을 선택하게 되었습니다.

## 사이트 분석

http 요청을 줄이기 위해 스프라이트 기법을 사용하는 등 좋은 사이트를 만들기 위한 노력을 엿볼 수 있었으며,
<br>쇼핑몰인데도 불구하고 플랫한 디자인과 코드, 사이트 구조가 너무 좋았습니다.

## 개선사항

1. 웹 접근성 고려
<br>openWAX라는 크롬 익스텐션을 이용하여 웹 접근성을 확인한 결과, 현재 사이트 index(홈화면)을 기준으로 59점이었습니다.
<br>이는 스크린 리더기를 사용하는 시각 장애인도 비록 많은 비율을 차지하는 고객 층은 아닐 수 있지만, 카카오프렌즈를 구매할 수 있는 잠재적 고객이 될 수 있다고 생각하는데, 이러한 고객들을 놓치게 되는 것은 아닐까 싶습니다. 카카오프렌즈를 구매하고자 하는 모든 고객이 불편함 없이 이용할 수 있는 친절한 사이트가 되었으면 좋겠다는 생각에 웹 접근성을 고려하였습니다.

2. 반응형
<br>과제 필수 요소가 반응형이기 때문에 어디까지 반응형이 적용되어 있는지 궁금하여 확인해보았습니다.
<br>최대한 현재의 UI 컨셉에 맞추어 이질감 없는 반응형을 구현하고자 하였습니다.

3. 불필요한 class는 줄이기
<br>사이트를 살펴보다보니 부트스트랩 방식처럼, 한 태그에 여러 클래스를 사용하고 있다는 것과 굳이 class 또는 id가 필요없어도 CSS를 적용시킬 수 있는 태그들이 눈에 띄었습니다. 물론 지금의 사이트를 제작할 때 자체적으로 레이아웃 프레임워크를 만들었다던지 등의 이유로 모든 태그에 class가 선언되었을 수도 있지만, 그래도 불필요한 class를 줄이고자 하였습니다.

4. 불필요한 div 줄이기
<br>3번과 마찬가지로, 불필요한 div는 페이지 로딩속도에 영향을 미칠 것 입니다. 따라서 굳이 사용하지 않아도 되는 div는 제거하였습니다.

5. 크로스 브라우징
<br>브라우저 상관없이 같은 화면이 나올 수 있도록 크로스 브라우징도 고려하였습니다.
<br>확인한 브라우저 : 익스플로러 9이상, 크롬, 사파리

## To be

1. 모달 컴포넌트 따로 빼기
<br>작업하다보니 로그인이나 상품 상세보기의 경우 모달로 뜨는 형태인데, 안에 컨텐츠나 모달제목은 바꿀 수 있도록 모달 컴포넌트를 따로 만드는 것이 좋을거라 판단됩니다. 시간관계 상 여기까지 작업하지 못하여서 아쉬운 마음이 들어, 제출 후 조금 더 작업하여 이 부분을 수정하고 싶습니다.
2. 폼체크
<br>현재 input 기본 기능인 required만 사용한 상태로, 기존 사이트의 폼 체크 UI대로
<br>input 체크 후 false일 경우 에러메시지가 보여지도록 수정하고자 합니다.
3. 모바일화면에서의 이미지 슬라이더
<br>모바일화면에서의 이미지 슬라이더 부분을 기존 사이트의 이미지 슬라이더처럼 구현하고자하였습니다. 하지만 jquery 없이 자바스크립트로만 직접 구현하려하니... 터치 슬라이드에 관한 이슈로 인해 구현하지 못하였습니다ㅠㅠ 이 부분 또한 수정하고 싶습니다.
