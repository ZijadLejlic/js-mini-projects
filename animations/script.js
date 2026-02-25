let textTag = document.querySelector('.section1 h1');

let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp";
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span`;
}

let spans = textTag.querySelectorAll('span');

let k = 0;

let interval = setInterval(() => {
    
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove';
    k++;

    if(k === spans.length){
        clearInterval(interval);
    }

}, 70);

let border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {

    if(this.oldScroll > this.scrollY) {
        animationWidth -= 0.8;
    } else animationWidth += 0.8;
    
    if(animationWidth >= 100) {
        animationWidth = 100;
    }

    if(animationWidth <= 0) {
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%';

    console.log(animationWidth);

    this.oldScroll = this.scrollY;

    imageAnimation();
}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');

    if(sectionPosition < screenPosition) {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }
}