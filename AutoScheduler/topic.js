let topicsArray = [
    "尚未開學",
    "不上課",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷",
    "不上課"
];

let topicsClassOff = [
    "不上課",
    "國定假日",
    "尚未開學"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    // 一次設定好月份與日期
    startDate.setMonth(startMonth - 1, startDay);
    // 時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

// 先在程式碼中直接指定社團課程第一天
//setMonthAndDay(4, 1);