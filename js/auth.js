

const signupform = document.getElementById('reg');

//Registration
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    //get user info
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password').value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        
        //store username in database
        cred.user.updateProfile({
            displayName: user.firstName + ' ' + user.lastName
        });

        //signup successful
        $('.nav-tabs a[href="#profile-classic"]').tab('show')
    })
    
    signupform.reset();
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            //User is signed in
            var user = firebase.auth().currentUser;

            if(user != null){
                var email_id = user.email;
                var email_verified = user.emailVerified;
                console.log('Welcome User :' + email_id +
                '<br/>Verified : ' + email_verified)
                send_verification();
                setTimeout(logout,2000);
            }
        }
    })

})


const loginform = document.getElementById('logForm');


auth.onAuthStateChanged(user => {

})


//Login
let talk;
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get user info
    const email = document.getElementById('logmail').value;
    const password = document.getElementById('logpass').value;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(function(){
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                //User is signed in
            var user = firebase.auth().currentUser;
    
                if(user != null){
                    var email_id = user.email;
                    var email_verified = user.emailVerified;
                    if(email_verified === true){
                        window.location.replace("https://qobitech.github.io/LEOD/loginsuccess.html");
                    }else{
                        setTimeout(logout,2000);
                    }
                }
            }
        })    
    
    }).then(function(error){
        talk = 'error';
    })
    console.log(talk);

})

function send_verification(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function(){
        window.location.replace("https://qobitech.github.io/LEOD/verifyemail.html");
    }).catch(function(error){
        //An error happened
    });
}


function logout(){
        auth.signOut().then(function(){
            window.location.replace("https://qobitech.github.io/LEOD");
        })
}

// const logoutbtn = document.getElementById('signout').value;

// $('#signout').on('click',()=>{
//     // logout();
//     console.log('signout');
// })