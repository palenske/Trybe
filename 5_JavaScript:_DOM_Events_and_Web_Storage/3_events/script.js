function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

// exercise 1:
function setDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dayNumbers = document.querySelector('#days');
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayNumberList = document.createElement('li');
    dayNumberList.innerHTML = day;
    dayNumberList.className = 'day';
    if (holidays.indexOf(dezDaysList[index]) !== -1) {
      dayNumberList.classList.add('holiday');
    }
    if (fridays.indexOf(dezDaysList[index]) !== -1) {
      dayNumberList.classList.add('friday');
    }
    dayNumbers.appendChild(dayNumberList);
  }
}
setDays();

// exercise 2:
function holidayButton(btnName) {
  const fatherBtn = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerHTML = btnName;
  btn.setAttribute('id', 'btn-holiday');
  fatherBtn.appendChild(btn);
}
holidayButton('Feriados');

// exercise 3:
function showHolidays() {
  function changeColor() {
    const allHolidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < allHolidays.length; index += 1) {
      if (allHolidays[index].style.backgroundColor != 'pink') {
        allHolidays[index].style.backgroundColor = 'pink';
      } else {
        allHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  }
  const btnChange = document.querySelector('#btn-holiday');
  btnChange.addEventListener('click', changeColor);
}

showHolidays();