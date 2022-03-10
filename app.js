setInterval(() => {
  d = new Date();
  h = d.getHours();
  if(h>12){
      h=h-12;
    }
  m = d.getMinutes();
  s = d.getSeconds();
  mile = d.getMilliseconds();

  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let milesecond = document.getElementById("milesecond");
  hour.innerHTML=h+":";
  minute.innerHTML=m+":";
  second.innerHTML=s+":";
  milesecond.innerHTML=mile;




}, 1);
