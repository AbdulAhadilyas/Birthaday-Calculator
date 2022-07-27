function ageCalculater() {
  let date1 = document.getElementById("date").value;
  let currentDate = new Date();
  let userDate = new Date(date1);

  if (userDate > currentDate) {
    alert("not born yet");
    return false;
  }

  y1 = currentDate.getFullYear() - 1;
  m1 = 1 + currentDate.getMonth();

  y2 = userDate.getFullYear();
  m2 = 1 + userDate.getMonth();

  let age = y1 - y2;
  document.getElementById("years").innerHTML = age;

  let month = "";

  if (m1 >= m2) {
    month = m1 - m2;
  } else {
    age--;
    month = 12 + m1 - m2;
  }

  document.getElementById("months").innerHTML = month;
  console.log(age, month);

  let upcomingBday = new Date(
    currentDate.getFullYear(),
    userDate.getMonth(),
    userDate.getDate()
  );

  console.log(upcomingBday);
  if (currentDate > upcomingBday) {
    upcomingBday.setFullYear(currentDate.getFullYear() + 1);
  }
  var one_day = 24 * 60 * 60 * 1000;

  let daysLeft = Math.ceil(
    (upcomingBday.getTime() - currentDate.getTime()) / one_day
  );
  document.getElementById("days").innerHTML = daysLeft;

  console.log(daysLeft);
}
