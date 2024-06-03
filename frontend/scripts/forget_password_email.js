const submitButton=document.querySelector('body > main > div > a');
const emailBox=document.querySelector('body > main > input');

document.addEventListener('DOMContentLoaded', ()=>{
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
    
        const userData={
            email: emailBox.value
        };
        
        localStorage.setItem('email', userData.email);
    
        fetch('/backend/send-otp',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                window.alert(data.message);
                window.location.href = '../forget_password/forget_password.html';
            }else{
                window.alert(data.message);
                window.location.reload();
            }
        })
    })
})
