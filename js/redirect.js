if(window.location.href == "https://qobitech.github.io/LEOD/verifyemail.html"){
    setTimeout(login,4000);
} 

function login(){
    window.location.href = "https://qobitech.github.io/LEOD/";
}

function logout(){
    auth.signOut().then(function(){
        window.location.replace("https://qobitech.github.io/LEOD");
    })
}

$('#signout').on('click',()=>{
    logout();
    console.log('signout');
})


