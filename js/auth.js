

const signupform = document.getElementById('reg');
message = document.querySelector('.message');
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    //get user info
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password').value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        
        //signup successful
        $('.nav-tabs a[href="#profile-classic"]').tab('show')
    })
    setTimeout(logout,2000);
    signupform.reset();
    message.innerHTML=`REGISTRATION SUCCESSFUL`;
    

})

function logout(){
    // const lout = document.querySelector('');
    // lout.addEventListener('click', (e)=>{
        // e.preventDefault();
        auth.signOut().then(res=>{
            console.log(res.user);
        })
    // })
}