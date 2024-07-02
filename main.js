document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const greet = "HELLO THERE!";
    const name = "My name is Jonel";
    const fullText = greet + " " + name;
    let index = 0;

    function type() {
        if (index < fullText.length) {
            if (index < greet.length) {
                textElement.insertAdjacentHTML('beforeend', `<span style="color: orange;">${greet.charAt(index)}</span>`);
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

    const slidingText = document.querySelector('.sliding-text');
    const words = slidingText.querySelectorAll('span');
    let index2 = 0;

    function slideText() {
        words.forEach((word, i) => {
            word.style.transform = `translateY(${(i - index2) * 2.5}rem)`;
        });
        index2 = (index2 + 1) % words.length;
    }

    setInterval(slideText, 3000);
});

function showModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

(function(){
    emailjs.init("FO5YEELgq5EU2ApFm");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_4l2izwp', 'template_m3zqlnf', this)
        .then(function() {
            alert('Message sent successfully!');
            exit();
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
});