export function Controls({ buttonPlay, buttonStop, buttonWrapper, switchLightMode, switchDarkMode }) {
   let isClicked = false;

   function play() {
      buttonPlay.setAttribute("disabled", "disabled");
      buttonStop.removeAttribute("disabled", "disabled");
   }

   function stop() {
      buttonPlay.removeAttribute("disabled", "disabled");
      buttonStop.setAttribute("disabled", "disabled");
   }

   function mouseOver(button) {
      button.style.transform = "scale(1.1)";
   }

   function mouseOut(button) {
      button.style.transform = "scale(1.0)";
   }

   function clicked(button) {
      if (isClicked) {
         if (button.style.backgroundColor == "var(--bg-color-soundClicked)") {
            cleanClick();
            isClicked = false;
         } else {
            cleanClick();
            changeElementColor(button);
            isClicked = true;
         }
      } else {
         changeElementColor(button);
         isClicked = true;
      }
   }

   function changeElementColor(button) {
      button.style.backgroundColor = "var(--bg-color-soundClicked)";
      button.firstElementChild.firstElementChild.firstElementChild.style.fill = "var(--color-darkText)";
      button.lastElementChild.firstElementChild.style.backgroundColor = "var(--color-darkText)";
      button.lastElementChild.classList.add("active");

   }

   function cleanClick() {
      buttonWrapper.forEach((element) => {
         element.style.backgroundColor = "var(--bg-colorSound)";
         element.firstElementChild.firstElementChild.firstElementChild.style.fill = "var(--colorText)";
         element.lastElementChild.firstElementChild.style.backgroundColor = "var(--colorText)";
         element.lastElementChild.classList.remove("active");
         element.lastElementChild.firstElementChild.value = 0;
      });
   }

   function darkMode() {
      document.documentElement.style.setProperty("--bg-color", "var(--bg-color-DarkMode)");
      document.documentElement.style.setProperty("--colorText", "var(--color-darkText)");
      document.documentElement.style.setProperty("--bg-colorSound", "var(--bg-color-darkSound)");
      document.documentElement.style.setProperty("--bg-color-soundClicked", "var(--bg-color-darkSoundClicked)");

      switchLightMode.classList.add("hide");
      switchDarkMode.classList.remove("hide");
   }

   function lightMode() {
      document.documentElement.style.setProperty("--bg-color", "var(--bg-color-lightMode)");
      document.documentElement.style.setProperty("--colorText", "var(--color-lightText)");
      document.documentElement.style.setProperty("--bg-colorSound", "var(--bg-color-lightSound)");
      document.documentElement.style.setProperty("--bg-color-soundClicked", "var(--bg-color-lightSoundClicked)");

      switchLightMode.classList.remove("hide");
      switchDarkMode.classList.add("hide");
   }

   return { play, stop, mouseOver, mouseOut, clicked, cleanClick, darkMode, lightMode };
}