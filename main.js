document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const greet = "HELLO THERE!";
    const name = "My name is Jonel";
    const fullText = greet + " " + name;
    let index = 0;

    function type() {
        if (index < fullText.length) {
            if (index < greet.length) {
                textElement.insertAdjacentHTML('beforeend', `<span style="color: #8f25cc;">${greet.charAt(index)}</span>`);
            } else if (index === greet.length) {
                textElement.insertAdjacentHTML('beforeend', '<br>');
            } else {
                textElement.insertAdjacentHTML('beforeend', `<span style="color: white;">${name.charAt(index - greet.length - 1)}</span>`);
            }
            index++;
            setTimeout(type, 100); // Adjust typing speed here (100ms per letter)
        } else {
            textElement.style.borderRight = 'none'; // Remove cursor after typing
        }
    }

    type();
    
    const slidingtext = document.getElementById('animated-text');
    const words = ["Web Developer", "Software Developer", "API Integration", "Web Deployment"];
    let wordIndex = 0;

    function typeWord(word, callback) {
        let currentLength = 0;
        const interval = setInterval(() => {
            slidingtext.textContent = word.substring(0, currentLength);
            currentLength++;
            if (currentLength > word.length) {
                clearInterval(interval);
                setTimeout(callback, 1000);
            }
        }, 150);
    }

    function slideText(word, direction, callback) {
        const textSlide = document.createElement('span');
        textSlide.className = 'text-slide';
        textSlide.textContent = word;
        slidingtext.appendChild(textSlide);

        const distance = textSlide.offsetWidth;
        textSlide.style.transform = `translateX(${direction * distance}px)`;
        textSlide.style.transition = 'transform 1s ease-in-out';

        requestAnimationFrame(() => {
            textSlide.style.transform = 'translateX(0)';
        });

        setTimeout(() => {
            slidingtext.removeChild(textSlide);
            callback();
        }, 1000);
    }

    function animateText() {
        const currentWord = words[wordIndex];
        slideText(currentWord, -1, () => {
            typeWord(currentWord, () => {
                setTimeout(() => {
                    slideText(currentWord, 1, () => {
                        wordIndex = (wordIndex + 1) % words.length;
                        animateText();
                    });
                }, 1000);
            });
        });
    }

    animateText();
});
