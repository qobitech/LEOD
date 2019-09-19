

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
    // message.innerHTML=`REGISTRATION SUCCESSFUL`;
    
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            //User is signed in

            var user = firebase.auth().currentUser;

            if(user != null){
                var email_id = user.email;
                var email_verified = user.emailVerified;
                console.log('Welcome User :' + email_id +
                '<br/>Verified : ' + email_verified)
            }
        }
    })

})



// function emailverification(){
//     var actionCodeSettings = {
//         url: 'https://qobitech.github.io/LEOD/?email=' + firebase.auth().currentUser.email,
//         iOS: {
//           bundleId: 'com.example.ios'
//         },
//         android: {
//           packageName: 'com.example.android',
//           installApp: true,
//           minimumVersion: '12'
//         },
//         handleCodeInApp: false,
//         // When multiple custom dynamic link domains are defined, specify which
//         // one to use.
//         dynamicLinkDomain: "example.page.link"
//       };
//       firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
//         .then(function() {
//           // Verification email sent.
//         })
//         .catch(function(error) {
//           // Error occurred. Inspect error.code.
//         });
// }


function logout(){
    // const lout = document.querySelector('');
    // lout.addEventListener('click', (e)=>{
        // e.preventDefault();
        auth.signOut().then(res=>{
            console.log('user signed out');
        })
    // })
}