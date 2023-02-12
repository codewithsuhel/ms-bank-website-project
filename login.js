
// step 1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
   // get the email address inside the email input field
  // always remember to use.value to get next form an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;

   // step 3: get the password
   // 3.a: set on the id html element
   // 3.b: get the element
   // 3.c: get the value from element
   const passField = document.getElementById('user-password');
   const password = passField.value;
   console.log(email, password);

   // DANGER: DO NOT VERIFY email password on the client side
   // step 4: verify email and password check weather valid or invalid user
   
   if(email === 'code@gmail.com' && password === 'code'){
    window.location.href = 'bank.html';
   }
   else{
    alert('invalid data');
   }
})
