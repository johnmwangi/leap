var leap = parseInt (prompt ('Enter year'));
var number = leap % 100;
var year = leap % 400;
var digit = leap % 4;
if (number == 0) {
  if(year == 0) {
    alert (leap + 'is a leap year');
  }
  else {
    alert(leap + 'is not a leap year');
  }
}else if(digit == 0) {
  alert(leap + 'is aleap year');
}
  else {
    alert(leap + 'is not a leap year');
}
