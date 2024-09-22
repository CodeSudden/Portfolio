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

document.addEventListener('scroll', function() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('is-visible');
        } else {
            section.classList.remove('is-visible');
        }
    });
});

let slideIndex = 0;
const projects = [
    {
        title: 'Alumplify',
        images: ['assets/alumplify/alumplify-home.JPG', 'assets/alumplify/dashboard.JPG', 'assets/alumplify/login.JPG', 'assets/alumplify/alumforum.JPG', 'assets/alumplify/stories.JPG'],
        description: 'Alumni Website Built with MERN Stack, As a collaborator on this project, I successfully implemented both the frontend and backend components of the alumni website. Additionally, I deployed the site using a combination of Render for API hosting and Netlify for frontend deployment.',
        codeLink: null,
        websiteLink: 'https://alumplify.netlify.app'
    },
    {
        title: 'Footlocker',
        images: ['assets/footlocker/footlocker.JPG', 'assets/footlocker/footlocker-login.JPG', 'assets/footlocker/cart.JPG', 'assets/footlocker/store.JPG', 'assets/footlocker/profile.JPG', 'assets/footlocker/admindas.JPG'],
        description: 'This web application is designed for selling shoes online. It is built using PHP, HTML, CSS, and MySQL for the server-side functionality. The program includes the following features, Point of Sale (POS): Allows users to make purchases securely and efficiently. Content Management System (CMS): Enables easy management of product listings, inventory, and other content. User Authentication: Provides secure login and registration functionality for both customers and administrators.',
        codeLink: 'https://github.com/CodeSudden/Footlocker',
        websiteLink: null
    },
    {
        title: 'School Management System',
        images: ['assets/schoolms/SMS.JPG', 'assets/schoolms/admnlgn-class.JPG', 'assets/schoolms/addcou-class.JPG','assets/schoolms/stud-class.JPG', 'assets/schoolms/addstud-class.JPG'],
        description: 'Developed a mockup program for a School Management System, incorporating basic CRUD operations and user authentication. The program was built using HTML, CSS, PHP, and MySQL. The system enabled administrators to create, read, update, and delete student and teacher records, ensuring efficient management of school data. User authentication was implemented to secure the system, allowing only authorized users to access and modify information. The front-end was designed with HTML and CSS for a user-friendly interface, while PHP handled server-side logic and MySQL was used for database management.',
        codeLink: 'https://github.com/CodeSudden/classroom_mgmnt_sys',
        websiteLink: null
    },
    {
        title: 'Subsytem Booking',
        images: ['assets/booking/Booking Subsystem.png', 'assets/booking/login-booking.JPG', 'assets/booking/services-booking.JPG', 'assets/booking/cancel-booking.JPG', 'assets/booking/refunds-booking.JPG',],
        description: 'Integrate a booking subsystem and an admin panel into the existing system. This includes user authentication, CRUD operations, and API integration. Develop a responsive website using Bootstrap, with ASPX pages written in C++. additionally Implement an API to display and access data.',
        codeLink: 'https://github.com/CodeSudden/BookingSubSystem',
        websiteLink: null
    },
    {
        title: 'GunShop',
        images: ['assets/gunshop/GunShop.JPG','assets/gunshop/login-shop.JPG', 'assets/gunshop/acc-shop.JPG', 'assets/gunshop/reg-shop.JPG', 'assets/gunshop/admn-shop.JPG', 'assets/gunshop/repo-shop.JPG'],
        description: 'Completed a small project using VB.NET that included a Point of Sale (POS) system, user authentication, and integration with an ACCDB database. The POS system managed sales transactions, inventory, and receipts, ensuring smooth and efficient operation. User authentication was implemented to secure the system, allowing only authorized personnel to access and perform transactions. The ACCDB database was used to store and manage all relevant data, providing a robust backend for the application. The project aimed to create a reliable and user-friendly system to manage their sales and inventory effectively.',
        codeLink: 'https://github.com/CodeSudden/VBNET-SHOP',
        websiteLink: null
    },
    {
        title: 'Wordpress condo website',
        images: ['assets/wp-condo/homepage.png', 'assets/wp-condo/condosel.png', 'assets/wp-condo/aboutus.png', 'assets/wp-condo/condoselect.png', 'assets/wp-condo/blog.png', 'assets/wp-condo/blog2.png' ],
        description: 'A dynamic condominium website designed to showcase various condo listings with an intuitive search feature for selecting condos by location. The site includes a blog section to enhance SEO performance, built using Elementor for seamless UI design and Yoast SEO for optimized search engine visibility.',
        codeLink: null,
        websiteLink: null
    }
];

function showModal(index) {
    slideIndex = 0;
    const project = projects[index];
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-description').innerText = project.description;
    const codeLink = document.getElementById('code-link');
    const websiteLink = document.getElementById('website-link');

    if (project.codeLink) {
        codeLink.href = project.codeLink;
        codeLink.innerText = 'View Code';
        codeLink.classList.remove('disabled');
        codeLink.style.pointerEvents = 'auto';
    } else {
        codeLink.href = '#';
        codeLink.innerText = 'Unavailable';
        codeLink.classList.add('disabled');
        codeLink.style.pointerEvents = 'none';
    }

    if (project.websiteLink) {
        websiteLink.href = project.websiteLink;
        websiteLink.innerText = 'Visit Website';
        websiteLink.classList.remove('disabled');
        websiteLink.style.pointerEvents = 'auto';
    } else {
        websiteLink.href = '#';
        websiteLink.innerText = 'Unavailable';
        websiteLink.classList.add('disabled');
        websiteLink.style.pointerEvents = 'none';
    }
    
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = '';  // Clear previous images
    project.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = project.title;
        slideshow.appendChild(img);
    });
    
    updateSlides();
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeSlide(n) {
    const slides = document.querySelectorAll('#slideshow img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    updateSlides();
}

function updateSlides() {
    const slides = document.querySelectorAll('#slideshow img');
    const slideshow = document.getElementById('slideshow');
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
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