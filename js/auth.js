const signupform = document.querySelector('reg');
signup.addEventListener('submit',(e)=>{
    e.preventDefault();


    //get user info
    const email = signupform['email-signup'].value;
    const password = signupform['password'].value;

    console.log(email, password);

})