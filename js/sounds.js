export default function () {

   let bgAudio = new Audio();
   bgAudio.loop = true;
   let lastSrc;

   function play(button) {
      const buttonClass = button.classList.value || 0;
      volumeControl(0);
      switch (buttonClass) {
         case "forest": {
            setMedia("media/floresta.wav");
            break;
         }
         case "rain": {
            setMedia("media/chuva.wav");
            break;
         }
         case "coffeeShop": {
            setMedia("media/cafeteria.wav");
            break;
         }
         case "fireplace": {
            setMedia("media/lareira.wav");
            break;
         }
         default: {
            bgAudio.pause();
         }
      }
   }

   function stop() {
      bgAudio.pause();
   }

   function volumeControl(volume) {
      bgAudio.volume = volume;
   }

   function setMedia(src) {
      if (lastSrc == src) {
         stop();
         lastSrc = 0;
      } else {
         bgAudio.src = src;
         bgAudio.play();
         lastSrc = src;
      }
   }

   return { bgAudio, play, stop, volumeControl };
}