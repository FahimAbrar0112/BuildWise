const passwordSection = document.querySelector('body > main > div > div.main_section_password');
const otpSection = document.querySelector('body > main > div > div.otp_verification');
const newPasswordBox = document.querySelector('#password');
const confirmedPasswordBox = document.querySelector('#confirm_password');
const passwordSubmitButton = document.querySelector('body > main > div > div.main_section_password > button');
const otpSubmitButton = document.querySelector('body > main > div > div.otp_verification > button');
const otpBox = document.querySelector('body > main > div > div.otp_verification > input');
const userEmail = localStorage.getItem('email');

otpSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userData = {
        email: userEmail,
        enteredOTP: otpBox.value
    }

    fetch('/backend/verify-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.alert(data.message);
                passwordSection.style.display = 'block';
                otpSection.style.display = 'none';
            } else {
                window.alert(data.message);
                window.location.reload();
            }
        })
})

passwordSubmitButton.addEventListener('click', async function (event) {
    event.preventDefault();

    const userData = {
        newPassword: newPasswordBox.value,
        confirmedPassword: confirmedPasswordBox.value,
        email: userEmail
    }

    fetch('/backend/setNewPassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.alert(data.message);
                window.location.href = '../home/home.html';
            } else {
                window.alert(data.message);
                newPasswordBox.value='';
                confirmedPasswordBox='';
            }
        })
})
