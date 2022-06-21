import { buttonPlay, buttonStop, buttonIncreaseTime, buttonDecreaseTime, buttonWrapper, switchLightMode, switchDarkMode, soundSliders } from "./elements.js";

export function Events({ controls, timer, sound }) {
   buttonPlay.addEventListener("click", () => {
      timer.countDown();
   });

   buttonStop.addEventListener("click", () => {
      timer.reset();
   });

   buttonIncreaseTime.addEventListener("click", () => {
      timer.increase();
   });

   buttonDecreaseTime.addEventListener("click", () => {
      timer.decrease();
   });

   buttonWrapper.forEach((element) => {
      element.firstElementChild.addEventListener("click", () => {
         controls.clicked(element);
         sound.play(element.firstElementChild);
      });
   });

   buttonWrapper.forEach((element) => {
      element.firstElementChild.addEventListener("mouseover", () => {
         controls.mouseOver(element.firstElementChild);
      });
   });

   buttonWrapper.forEach((element) => {
      element.firstElementChild.addEventListener("mouseout", () => {
         controls.mouseOut(element.firstElementChild);
      });
   });

   soundSliders.forEach((element) => {
      element.addEventListener("input", () => {
         sound.volumeControl(element.firstElementChild.value);
      });
   });

   switchLightMode.addEventListener("click", () => {
      controls.darkMode();
   });

   switchDarkMode.addEventListener("click", () => {
      controls.lightMode();
   });
}