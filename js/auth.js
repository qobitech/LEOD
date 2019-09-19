

const signupform = document.getElementById('reg');

signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
   

    //get user info
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password').value;

    console.log(email, password);


})