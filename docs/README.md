# 크리스마스

## 구현할 기능 목록

- Constant
- [x] Constant 클래스

  - [x] INPUT, OUTPUT, PROMOTION, ECT, ERROR, MENU, EVENT, BADGE

- Validation
- [x] Validation 클래스

- Model
- [x] Discount 클래스
  - [x] calculateChristmasDiscount : 크리스마스 디데이 할인 금액 계산
  - [x] calculateWeekdayDiscount : 주중 할인 금액 계산
  - [x] calculateWeekendDiscount : 주말 할인 금액 계산
  - [x] calculateSpecialDiscount : 특별 할인 금액 계산
  - [x] calculateTotalBenefit : 총 혜택 금액 계산
- [x] OrderMenu 클래스

  - [x] getOrder : 주문한 메뉴 반환
  - [x] calculateTotalOrderAmount : 할인 전 총주문 금액 계산
  - [x] calculateMenuAmount : 해당 메뉴 주문 금액 계산
  - [x] checkGift : 총주문 금액에 따라 증정 할지 말지 판단
  - [x] countDessert : 디저트 주문 수 계산
  - [x] countDrink : 음료 주문 수 계산

- View
- [x] InputView 클래스
  - [x] inputDate : 방문 날짜 입력
    - [x] isValidDate : 1이상 31이하의 정수가 아닌 경우 에러메시지를 출력하고 다시 입력받도록
  - [x] inputOrder : 주문 메뉴와 수량 입력
    - [x] isValidOrder : 메뉴판에 없는 메뉴를 입력하거나, 1 이하의 메뉴 개수를 입력하거나, 메뉴 형식이 다르거나, 중복 메뉴를 입력했거나, 음료만 주문했거나, 한번에 20개 이상의 메뉴를 주문한 경우 에러메시지를 출력하고 다시 입력받도록
  - [x] parseStringToOrder : 문자열로 받은 주문을 맵 형식으로 바꿈
- [x] OutputView 클래스

  - [x] printEventPlanner : 이벤트 플래너 인사 출력
  - [x] printCaution : 이벤트 주의사항 출력
  - [x] printEventPreview : 이벤트 미리보기 메시지 출력
  - [x] printOrderMenu : 주문 메뉴 출력
  - [x] printOrderAmount : 할인 전 총주문 금액 출력
  - [x] printPromotionMenu : 증정 메뉴 출력
  - [x] printPromotionDetails : 혜택 내역 출력
  - [x] printDiscount : 각 할인 금액 출력
  - [x] printTotalBenefit : 총혜택 금액 출력
  - [x] printExpectedPayment : 할인 후 예상 결제 금액 출력
  - [x] printEventBadge : 이벤트 뱃지 출력

- Controller
- [x] EventController 클래스

  - [x] inputDateAndOrder : 예상 방문 날짜와 주문할 메뉴를 입력받고 메시지 출력
  - [x] previewEventBenefits : 이벤트 혜택 미리보기

- Test
  - [x] ApplicationTest
  - [x] InputTest
  - [x] OutputTest
  - [x] DiscountTest
  - [x] OrderMenuTest

## 추가로 고려할 사항

- [x] 클래스(객체)를 분리하는 연습
- [x] 도메인 로직에 대한 단위테스트 작성하는 연습
- [x] 값을 하드코딩 하지 않고 상수 쓰기
- [x] 변수, 함수명 명확하게
- [x] for 대신 forEach 사용하기
- [x] README.md 상세히 작성
- [x] 구현해야 할 기능과 예외적인 상황 기능 목록에 정리하고 기능 목록 업데이트하기
- [x] 구현 순서 신경쓰기
- [x] 한 함수가 한가지 기능만 담당하도록
- [x] 객체를 만드는 다양한 방법 이해하고 사용하기
- [x] 테스트는 작은 단위부터
- [x] 상수의 객체명을 파스칼케이스로, key명을 소문자 스네이크케이스로
- [x] 상수를 각각 export
- [x] 고차함수 사용
- [x] 인덱스로 참조하지 않고 각자 멤버변수로 관리하거나 key를 통해 참조
- [x] 예외처리 더 생각해보기
- [x] 함수(메소드) 15라인 제한
- [x] 비즈니스 로직과 UI 로직 분리
- [x] 객체의 상태 접근 제한
- [x] 객체는 객체스럽게 사용(로직에 대한 구현 없이 getter 메서드 만을 가진다거나 하는 경우 지양)
- [x] 필드의 수를 줄이기 위해 노력
- [x] 성공하는 케이스 뿐만 아니라 예외에 대한 케이스도 테스트
- [x] 테스트코드도 리팩토링
- [x] 테스트코드 구현 코드에서 분리
- [x] 테스트하기 어려운 부분은 분리하고 테스트 가능한 부분 단위테스트
