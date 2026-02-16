function pokreniMe(dugme) {

    let nazivDugmeta = dugme.innerText;
    let klasaDugmeta = dugme.className;
    console.log(klasaDugmeta);

    let message = document.querySelector('#kliknutoDugme');
    message.innerText = `Kliknuli ste na dugme: ${nazivDugmeta}`;

    message.removeAttribute('class');


}