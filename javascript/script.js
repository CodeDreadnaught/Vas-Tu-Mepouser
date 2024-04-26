import { container, appWrapper } from "./app.js";

class UIModal {
    static showIntroductoryPopUp() {
        const IntroductorySection = document.createElement("div"),
        IntroductoryContentWrapper = document.createElement("section"),
        introductoryParagraph = document.createElement("p"),
        introductoryButton = document.createElement("button");

        IntroductorySection.className = "introductory-section pop-up-section center border-radius-5";
        IntroductoryContentWrapper.className = "d-flex flex-direction-c justify-content-sb";
        introductoryButton.className = "border-radius-5 cursor-p general-transistion font-inherit";

        introductoryParagraph.innerHTML = "<strong>Vas Tu M'epouser</strong> was meticulously handcrafted with the tender thought of just one person and one person alone—the most special woman in the entire multiverse.";
        introductoryButton.textContent = "Sure";

        IntroductoryContentWrapper.appendChild(introductoryParagraph);
        IntroductoryContentWrapper.appendChild(introductoryButton);
        IntroductorySection.appendChild(IntroductoryContentWrapper);
        
        container.insertBefore(IntroductorySection, appWrapper);

        introductoryButton.addEventListener("click", () => {
            IntroductorySection.remove();
            UIModal.showNameInputPopUp();
        });
    }

    static showNameInputPopUp() {
        const nameInputSection = document.createElement("form"),
        nameInputContentWrapper = document.createElement("section"),
        nameInputParagraph = document.createElement("p"),
        nameInput = document.createElement("input"),
        nameInputButton = document.createElement("button");

        nameInputSection.className = "name-input-section pop-up-section center border-radius-5";
        nameInputContentWrapper.className = "d-flex flex-direction-c justify-content-sb";
        nameInput.className = "d-block font-inherit border-radius-5";
        nameInputButton.className = "border-radius-5 cursor-p general-transistion font-inherit";

        nameInput.type = "text";
        nameInput.placeholder = "Enter name....";
        nameInput.required = true;
        nameInputParagraph.innerHTML = "Enter your firstname or the first three letters of your firstname to find out if <strong>Vas Tu M'epouser</strong> was custom made for you.";
        nameInputButton.textContent = "Submit";

        nameInputContentWrapper.appendChild(nameInputParagraph);
        nameInputContentWrapper.appendChild(nameInput);
        nameInputContentWrapper.appendChild(nameInputButton);
        nameInputSection.appendChild(nameInputContentWrapper);

        container.insertBefore(nameInputSection, appWrapper);

        nameInputSection.addEventListener("submit", (event) => {
            event.preventDefault();

            UIModal.checkNameInput();
        });
    }

    static checkNameInput() {
        const nameUI = document.querySelector(".name-input-section input"),
        buttonUI = document.querySelector(".name-input-section button"),
        name = nameUI.value;

        if (name === " " || name[0] === " ") {
            nameUI.value = "";
            UIModal.alertUI("Kindly enter a valid name.", "error");
        } else {
            UIModal.validateNameInput(name, nameUI, buttonUI);
            nameUI.value = "";
        }
    }

    static validateNameInput(name, nameUI, buttonUI) {
        if (name.toLowerCase() === "nen" || name.toLowerCase() === "nenkemun") {
            UIModal.alertUI(`My Nenkemun, I have waited lifetimes for you to be here.`, "success");
            nameUI.disabled = true;
            buttonUI.disabled = true;

            setTimeout(() => {
                document.querySelector("form").remove();
                UIModal.showVerificationInputPopUp();
            }, 2500);
        } else {
            UIModal.alertUI(`${name}, you are not authorized to go beyond this page.`, "error");
        }
    }

    static showVerificationInputPopUp() {
        const verificationSection = document.createElement("form"),
        verificationContentWrapper = document.createElement("section"),
        verificationParagraph = document.createElement("p"),
        verificationInput = document.createElement("input"),
        verificationButton = document.createElement("button");

        verificationSection.className = "verification-section pop-up-section center border-radius-5";
        verificationContentWrapper.className = "d-flex flex-direction-c justify-content-sb";
        verificationInput.className = "d-block font-inherit border-radius-5";
        verificationButton.className = "border-radius-5 cursor-p general-transistion font-inherit";

        verificationInput.type = "text";
        verificationInput.placeholder = "Enter color....";
        verificationInput.required = true;
        verificationParagraph.textContent = "Just one more verification Baby Girl—I promise, this is the last one. When writing code, what is your preferred shade of red?";
        verificationButton.textContent = "Submit";

        verificationContentWrapper.appendChild(verificationParagraph);
        verificationContentWrapper.appendChild(verificationInput);
        verificationContentWrapper.appendChild(verificationButton);
        verificationSection.appendChild(verificationContentWrapper);

        container.insertBefore(verificationSection, appWrapper);

        verificationSection.addEventListener("submit", (event) => {
            event.preventDefault();

            UIModal.checkVerificationInput();
        });
    }

    static checkVerificationInput() {
        const colorUI = document.querySelector(".verification-section input"),
        buttonUI = document.querySelector(".verification-section button"),
        color = colorUI.value;

        if (color === " " || color[0] === " ") {
            colorUI.value = "";
            UIModal.alertUI("Kindly enter a valid color.", "error");
        } else {
            UIModal.validateVerificationInput(color, colorUI, buttonUI);
            colorUI.value = "";
        }
    }

    static validateVerificationInput(color, colorUI, buttonUI) {
        if (color.toLowerCase() === "maroon") {
            UIModal.alertUI(`This is the moment my eternal search comes to an end.`, "success");
            colorUI.disabled = true;
            buttonUI.disabled = true;

            setTimeout(() => {
                document.querySelector("form").remove();
                container.classList.remove("center");
                container.classList.remove("height-100dvh");
                appWrapper.classList.remove("d-none");
            }, 2500);
        } else {
            UIModal.alertUI(`Are you by chance not my Nenkemun?`, "error");
        }
    }

    static alertUI(message, alertType) {
        const form = document.querySelector("form"),
        formContent = document.querySelector("form section"),
        alertSection = document.createElement("div");

        alertSection.className = `${alertType} pop-up-alert border-radius-5 text-align-c inactive`;
        alertSection.textContent = message;

        form.insertBefore(alertSection, formContent);

        setTimeout(() => {
            alertSection.classList.remove("inactive");

            setTimeout(() => {
                alertSection.remove();
            }, 2500);
        }, 2);
    }
};

export default UIModal;