const date = new Date("2024-10-12");
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

console.log(year + "年" + month + "月" + day + "日");