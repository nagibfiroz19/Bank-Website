document.getElementById('login-page').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
  
   if(userEmail== 'nagib@gmail.com' && userPassword=='nagib'){
           
   }
   else{
       console.log('Email & Password mismatch');
   }
})