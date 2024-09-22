
        let timeRemaining = 3600;

        let timerInterval = setInterval(function() {
            timeRemaining--;

          
            let hours = Math.floor(timeRemaining / 3600);
            let minutes = Math.floor((timeRemaining % 3600) / 60);
            let seconds = timeRemaining % 60;

            let formattedTime = 
                (hours < 10 ? "0" + hours : hours) + ":" + 
                (minutes < 10 ? "0" + minutes : minutes) + ":" + 
                (seconds < 10 ? "0" + seconds : seconds);

           
            document.getElementById('timer').textContent = formattedTime;

            if (timeRemaining === 1800) {
                document.getElementById('message').textContent = "Залишилось менше половини часу!";
            }

     
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                document.getElementById('message').textContent = "Час вичерпано!";
            }

        }, 1000); 
   
