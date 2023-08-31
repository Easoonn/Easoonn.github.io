function updateUptime() {
      var now = new Date();
      var grt = new Date("03/04/2023 12:00:00");
      var timeDifference = now - grt;

      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      var seconds = Math.floor((timeDifference / 1000) % 60);

      var timeDateElement = document.getElementById("timeDate");
      var timesElement = document.getElementById("times");

      timeDateElement.textContent = "本站已安全运行 " + days + " 天";
      timesElement.textContent = hours + " 小时 " + minutes + " 分 " + seconds + " 秒";
    }

    updateUptime(); // Initial update
    setInterval(updateUptime, 1000); // Update every second