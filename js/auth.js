

const signupform = document.getElementById('reg');

signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
   

    //get user info
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password').value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        
        //signup successful
        document.querySelector('profile-classic');
        window.location.href = document.getElementById('profile-classic');
    })




})