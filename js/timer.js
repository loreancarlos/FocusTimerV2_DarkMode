export function Timer({ minutesDisplay, secondsDisplay, controls }) {

   let timeOut;

   function increase() {
      if (Number(minutesDisplay.textContent) <= 55) {
         update(Number(minutesDisplay.textContent) + 5, 0);
      }
   }

   function decrease() {
      if (Number(minutesDisplay.textContent) >= 5) {
         update(Number(minutesDisplay.textContent) - 5, 0);
      }
   }

   function update(minutes, seconds) {
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
   }


   function reset() {
      controls.stop();
      update(0, 0);
      clearTimeout(timeOut);
   }

   function countDown() {
      timeOut = setTimeout(() => {
         let minutes = Number(minutesDisplay.textContent);
         let seconds = Number(secondsDisplay.textContent);

         if (minutes <= 0 && seconds <= 0) {
            controls.stop();
            return;
         }
         if (seconds <= 0) {
            seconds = 59;
            minutes--;
         } else {
            seconds--;
         }

         controls.play();
         update(minutes, seconds);
         countDown();
      }, 50);
   }

   return { increase, decrease, reset, countDown }
}