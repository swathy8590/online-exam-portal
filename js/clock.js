
    setInterval(() => {
      d = new Date();
      hr = d.getHours();
      min = d.getMinutes();
      sec = d.getSeconds();
      hr_rotation = 30 * hr + min / 2;
      min_rotation = 6 * min;
      sec_rotation = 6 * sec;

      if (min == 59) {
        alert("Exam Finished");
      }
      hour.style.transform = `rotate(${hr_rotation}deg)`;
      minute.style.transform = `rotate(${min_rotation}deg)`;
      second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
 