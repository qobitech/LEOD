

const signupform = document.getElementById('reg');

signupform.on('submit',(e)=>{
    e.preventDefault();
   

    //get user info
    const email = signupform['email-signup'].value;
    const password = signupform['password'].value;

    console.log(email, password);


})