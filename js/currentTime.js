var timeNow = document.querySelector('#timeNow');

console.log(timeNow);

function updateTime(){
  timeNow.innerHTML = moment().format('hh:mm A');
  console.log(timeNow);
}

updateTime();
setInterval(updateTime,60000);
