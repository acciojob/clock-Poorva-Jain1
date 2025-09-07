//your JS code here. If required.
 let timerDisplay = document.getElementById("timer");

    // Function to update time
    function updateTime() {
      let currentDate = new Date(); // Get current date and time
      timerDisplay.innerHTML = currentDate.toLocaleString(); // Display it
    }

    // Initial call
    updateTime();

    // Update the time every second
    setInterval(updateTime, 1000);
