const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');


// Active and remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //Actin link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // remove show menu when i click in  the links
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// SCroll Reveal Animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});
// scroll Home
sr.reveal('.home__title', {})
sr.reveal('.btn', {
    delay: 200
});
sr.reveal('.home__img', {
    delay: 200
});
sr.reveal('.home__social-icon', {
    delay: 200
});
//scroll About
sr.reveal('.about__img', {})
sr.reveal('.aboutsubTitle', {
    delay: 200
});
sr.reveal('.about__text', {
    delay: 400
});
//scroll Skills
sr.reveal('.skills__subTitle', {})
sr.reveal('.skills__text', {
    delay: 200
});
sr.reveal('.skills__data', {
    interval: 200
});
sr.reveal('.skills__img', {
    delay: 400
});

//scroll Work

sr.reveal('.work__img', {
    interval: 200
});

//scroll Contact

sr.reveal('.inputBox', {
    interval: 200
});
sr.reveal('.contact__button', {
    interval: 200
});


// Dark Mode

const modeToggle = document.querySelector('.mode-darkLight');
const body = document.querySelector('body');
const icon = modeToggle.querySelector('i');

let getMode = localStorage.getItem("mode");
if (getMode === "dark-mode") {
    body.classList.toggle('active-m');
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle('active-m');
    body.classList.toggle('active-m');

    if (modeToggle.classList.contains('active-m')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    if (!body.classList.contains('active-m')) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});


let button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    button.classList.add('active-button');

    setTimeout(() => {
        let link = document.querySelector('.button-text');
        button.classList.remove('active-button');
        document.querySelector('.i-change').classList.replace('fa-cloud-arrow-down', 'fa-circle-check')

        link.innerText = 'Completed';
    }, 3000);

})


const text = document.querySelector('.sec-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Yassine';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Developer';
    }, 4000);
}

textLoad();

setInterval(textLoad, 4000);


const textarea = document.querySelector('textarea');
const inputBox = document.querySelector('.message');
const signal_num = document.querySelector('.signal_num');

textarea.addEventListener("keyup", () => {
    valLength = textarea.value.length;
    signal_num.textContent = valLength;
    inputBox.classList.add('active-l');

    valLength > 0 ? inputBox.classList.add('active-l') : inputBox.classList.remove('active-l');
    valLength > 100 ? inputBox.classList.add('error') : inputBox.classList.remove('error');

});

/**
 * Form validation
 */

const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const umessage = document.getElementById("umessage");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if (checkInputs().length > 0) {
    //     e.preventDefault();
    // }
    checkInputs();
});

function checkInputs() {
    //formErrors
    let formErrors = [];

    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const umessageValue = umessage.value.trim();

    if (fullNameValue === "") {
        formErrors.push("Full name cannot be Empty");
        setErrorFor(fullName, "Full name cannot be Empty");
    } else if (fullNameValue.length < 4) {
        formErrors.push("full name must be large than  4 chars");
        setErrorFor(fullName, "full name must be large than  4 chars");
    } else {
        setSuccessFor(fullName);
    }

    if (emailValue === "") {
        formErrors.push("email cannot be Empty");
        setErrorFor(email, "email cannot be Empty");
    } else if (!isEmail(emailValue)) {
        formErrors.push("Email is not valid!");
        setErrorFor(email, "Email is not valid!");
    } else {
        setSuccessFor(email);
    }

    if (subjectValue === "") {
        formErrors.push("Subject cannot be Empty");
        setErrorFor(subject, "Subject cannot be Empty");
    } else if (subjectValue.length < 4) {
        formErrors.push("Subject must be large than 4 chars");
        setErrorFor(subject, "Subject must be large than 4 chars");
    } else {
        setSuccessFor(subject);
    }

    if (umessageValue === "") {
        formErrors.push("Message cannot be Empty");
        setErrorFor(umessage, "Message cannot be Empty");
    } else if (umessageValue.length > 100) {
        formErrors.push("Message must be less than  100 chars");
        setErrorFor(umessage, "Message must be less than  100 chars");
    } else if (umessageValue.length < 30) {
        formErrors.push("Message must be large than 30 chars");
        setErrorFor(umessage, "Message must be large than 30 chars");
    } else {
        setSuccessFor(umessage);
    }
    return formErrors;
}

function setErrorFor(inputField, message) {
    const inputBox = inputField.parentElement;
    const small = inputBox.querySelector('small');
    small.textContent = message;
    if (inputBox.classList.contains('vfsxx')) {
        inputBox.classList.replace('vfsxx', 'vfexx');
    } else {
        inputBox.classList.add('vfexx')
    }
}

function setSuccessFor(inputField) {
    const inputBox = inputField.parentElement;
    if (inputBox.classList.contains('vfexx')) {
        inputBox.classList.replace('vfexx', 'vfsxx');
    } else {
        inputBox.classList.add('vfsxx');
    }

}

function isEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}