const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const userLabel = document.querySelector('#userLabel');
const passLabel = document.querySelector('#passLabel');


userInput.addEventListener('focus', (event) => {
    userLabel.classList.add('label-top');
})
userInput.addEventListener('focusout', (event) => {
    if(!event.target.value) {
        userLabel.classList.remove('label-top');
    }
})

passInput.addEventListener('focus', (event) => {
    passLabel.classList.add('label-top');
})
passInput.addEventListener('focusout', (event) => {
    if(!event.target.value) {
        passLabel.classList.remove('label-top');
    }
})
