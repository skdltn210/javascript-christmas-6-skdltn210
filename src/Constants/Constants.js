export const INPUT = {
  expected_visit_date: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  order_request: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
};

export const OUTPUT = {
  event_planner: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  event_preview: "일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  order_menu: "\n<주문 메뉴>",
  total_amount_before_discount: "\n<할인 전 총주문 금액>",
  gift_menu: "\n<증정 메뉴>",
  benefit_details: "\n<혜택 내역>",
  total_benefit_amount: "\n<총혜택 금액>",
  expected_payment: "\n<할인 후 예상 결제 금액>",
  december_event_badge: "\n<12월 이벤트 배지>",
  event_caution: "이벤트는 총 주문 금액이 10,000원 이상부터 적용됩니다.",
  order_caution: "음료만 주문할 수 없고 메뉴는 한번에 최대 20개까지 주문할 수 있습니다.",
};

export const PROMOTION = {
  special_discount_amount: 1000,
  gift: "샴페인",
  gift_amount: "1",
  event_month: "12월",
};

export const ECT = {
  blank: " ",
  none: "없음",
  won: "원",
  unit: "개",
  minus: "-",
};

export const ERROR = {
  date_error: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  order_error: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
};

export const MENU = {
  APPETIZER: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },
  MAIN: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },
  DESSERT: {
    초코케이크: 15000,
    아이스크림: 5000,
  },
  DRINK: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
};

export const EVENT = {
  christmas_discount: "크리스마스 디데이 할인: ",
  weekday_discount: "평일 할인: ",
  weekend_discount: "주말 할인: ",
  special_discount: "특별 할인: ",
  gift_event: "증정 이벤트: ",
};

export const BADGE = {
  star: "별",
  tree: "트리",
  santa: "산타",
};
