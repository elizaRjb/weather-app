export function convertUnixTimeToLocalDate(unixTime) {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  const date = new Date(unixTime * 1000);

  return date.toLocaleDateString('en-US', options);
}

export function convertUnixTimeToLocalTime(unixTime) {
  const date = new Date(unixTime * 1000);

  // Hours part from the timestamp
  var hours = "0" + date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  const formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return formattedTime;
}
