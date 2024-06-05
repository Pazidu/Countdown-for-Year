let cDay;
let cHour;
let cMinute;
let cSecond;
let cMonth;
let daysLeft;
let cYear;
let daysPerYear;
let daysinFeb;

let interval = window.setInterval(function () {
  let cDate = new Date();
  cHour = cDate.getHours();
  cMinute = cDate.getMinutes();
  cSecond = cDate.getSeconds();
  cDay = cDate.getDate();
  cMonth = cDate.getMonth() +1;
  cYear = cDate.getFullYear();

  if (cYear % 4 == 0) {
    daysPerYear = 366;
    daysinFeb = 29;
  } else {
    daysPerYear = 365;
    daysinFeb = 28;
  }

  switch (cMonth) {
    case 1:
      daysLeft = daysPerYear;
      break;
    case 2:
      daysLeft = daysPerYear - 31;
      break;
    case 3:
      daysLeft = daysPerYear - (31 + daysinFeb);
      break;
    case 4:
      daysLeft = daysPerYear - (62 + daysinFeb);
      break;
    case 5:
      daysLeft = daysPerYear - (92 + daysinFeb);
      break;
    case 6:
      daysLeft = daysPerYear - (123 + daysinFeb);
      break;
    case 7:
      daysLeft = daysPerYear - (153 + daysinFeb);
      break;
    case 8:
      daysLeft = daysPerYear - (184 + daysinFeb);
      break;
    case 9:
      daysLeft = daysPerYear - (215 + daysinFeb);
      break;
    case 10:
      daysLeft = daysPerYear - (245 + daysinFeb);
      break;
    case 11:
      daysLeft = daysPerYear - (276 + daysinFeb);
      break;
    case 12:
      daysLeft = daysPerYear - (306 + daysinFeb);
      break;
  }

  document.getElementById("seconds").innerHTML = 60 - cSecond;
  document.getElementById("minutes").innerHTML = 60 - cMinute;
  document.getElementById("hours").innerHTML = 24 - cHour;
  document.getElementById("days").innerHTML = daysLeft - cDay;
}, 1000);
