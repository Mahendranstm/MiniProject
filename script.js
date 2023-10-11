function showtime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = hours + ":" + minutes + ":" + seconds + ":" + session;

  const div = document.getElementById("clock");
  div.innerText = time;

  setTimeout(showtime, 1000);
}

showtime();
