

window.addEventListener("load", () => {
    const logo = document.querySelector("#hplogo");

    if (logo) {
        const newLogo = chrome.runtime.getURL("images/cysecor_logo.png");

        logo.style.backgroundImage = `url(${newLogo})`;
        logo.style.backgroundSize = "contain";
        logo.style.backgroundRepeat = "no-repeat";
    }
});

logo.src = chrome.runtime.getURL('images/cysecor_logo.png');
logo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');