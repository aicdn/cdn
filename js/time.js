    function siteTime() {
      window.setTimeout("siteTime()", 1000);
      var seconds = 1000;
      var minutes = seconds * 60;
      var hours = minutes * 60;
      var days = hours * 24;
      var years = days * 365;
      var today = new Date();
      var todayYear = today.getFullYear();
      var todayMonth = today.getMonth() + 1;
      var todayDate = today.getDate();
      var todayHour = today.getHours();
      var todayMinute = today.getMinutes();
      var todaySecond = today.getSeconds();
      var t1 = Date.UTC(2021, 12, 29, 17, 46, 00);  //此处填写建站时间 依次为 年,月,日,时,分,秒注意格式 半角,
      var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
      var diff = t2 - t1;
      var diffYears = Math.floor(diff / years);
      var diffDays = Math.floor((diff / days) - diffYears * 365);
      var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
      var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
      var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
      document.getElementById("sitetime").innerHTML = "⏳网站已运行⏳<p>" + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒"; //此处为显示的内容
    }
    siteTime();