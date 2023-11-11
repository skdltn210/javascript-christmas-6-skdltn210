export const INPUT = {
  expected_date:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  order_request:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
};

export const OUTPUT = {
  event_planner: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  event_preview: "12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  order_menu: "<주문 메뉴>",
  order_amount: "<할인 전 총주문 금액>",
  promotion_menu: "<증정 메뉴>",
  promotion_details: "<혜택 내역>",
  total_benefit: "<총혜택 금액>",
  expected_payment: "<할인 후 예상 결제 금액>",
  event_badge: "<12월 이벤트 배지>",
  none: "없음",
  won: "원",
  unit: "개",
  linebreak: "\n",
  event_caution: "이벤트는 총 주문 금액이 10,000원 이상부터 적용됩니다.",
  order_caution:
    "음료만 주문할 수 없고 메뉴는 한번에 최대 20개까지 주문할 수 있습니다.",
  one: " 1",
};

export const ERROR = {
  date_error: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  order_error: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

export const MENU = {
  APPETIZER: {
    mushroom_soup: "양송이수프",
    tapas: "타파스",
    caesar_salad: "시저샐러드",
  },
  MAIN: {
    t_born_steak: "티본스테이크",
    barbeque_rib: "바비큐립",
    seafood_pasta: "해산물파스타",
    christmas_pasta: "크리스마스파스타",
  },
  DESSERT: {
    choco_cake: "초코케이크",
    icecream: "아이스크림",
  },
  DRINK: {
    zero_coke: "제로콜라",
    red_wine: "레드와인",
    champagne: "샴페인",
  },
};

export const EVENT = {
  christmas_discount: "크리스마스 디데이 할인: ",
  weekday_discount: "평일 할인: ",
  special_discount: "특별 할인: ",
  promotion: "증정 이벤트: ",
};

export const BADGE = {
  star: "별",
  tree: "트리",
  santa: "산타",
};
