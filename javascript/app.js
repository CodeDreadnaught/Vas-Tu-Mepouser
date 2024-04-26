import UIModal from "./script.js";
import footer from "./footer.js";

const container = document.querySelector(".container"),
appWrapper  = document.querySelector(".app-wrapper");

(function loadAllEventListeners() {
    document.addEventListener("DOMContentLoaded", UIModal.showIntroductoryPopUp);
    document.addEventListener("DOMContentLoaded", footer);
}) ();

export { container, appWrapper };