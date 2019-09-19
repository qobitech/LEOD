

const signupform = document.getElementById('reg');

signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
   

    //get user info
    const email = signupform['email-signup'].value;
    const password = signupform['password'].value;

    console.log(email, password);


})