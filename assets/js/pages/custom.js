$(document).ready(function(){
  $('.hide_show a').click(function(){
    $('.sidebar').toggleClass("Amenu-space-remov");  
    var abc = $( "#myvideo" ).text();
    if(abc == ">"){
      $("#myvideo").text("<");
      $('.hide_show a').css({"transition-delay":"0.5s","border-radius":"0","border-top-right-radius":"50%","border-bottom-right-radius":"50%"});
    }else{
      $("#myvideo").text(">");
      $('.hide_show a').css({"transition-delay":"0.5s","border-radius":"0","border-top-right-radius":"50%","border-bottom-right-radius":"50%"});
    }
 });



 $('#select_all').on('click',function(){
  if(this.checked){
      $('.select_ms').each(function(){
          this.checked = true;
          $('.refresh').css("display","block");
      });
  }else{
       $('.select_ms').each(function(){
          this.checked = false;
          $('.refresh').css("display","none");
      });
    }
  });
});

// Login Page
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

var conPass = document.getElementById("conformpass");
var cpassmsg = document.getElementById("cpassmsg");

conPass.onkeyup = function() {
if((conPass.value == myInput.value)) {  
cpassmsg.classList.remove("invalid");
cpassmsg.classList.add("valid");
} else {
cpassmsg.classList.remove("valid");
cpassmsg.classList.add("invalid");
}
}
// }; if(cpassmsg.classList == "valid"){
//   document.getElementById("messageCpass").style.display = "none";
// }else{
//   document.getElementById("messageCpass").style.display = "block";
// }

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {  
letter.classList.remove("invalid");
letter.classList.add("valid");
} else {
letter.classList.remove("valid");
letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
capital.classList.remove("invalid");
capital.classList.add("valid");
} else {
capital.classList.remove("valid");
capital.classList.add("invalid");
}
// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
number.classList.remove("invalid");
number.classList.add("valid");
} else {
number.classList.remove("valid");
number.classList.add("invalid");
}

// Validate length
if(myInput.value.length >= 8) {
length.classList.remove("invalid");
length.classList.add("valid");
} else {
length.classList.remove("valid");
length.classList.add("invalid");
}
}
// if(length.classList == "valid"){
//     document.getElementById("message").style.display = "none";
//   }else{
//     document.getElementById("message").style.display = "block";
//   }


// Register Page
function validation(){

var Username = document.getElementById('username').value;
var Password = document.getElementById('password').value;
var Conformpass = document.getElementById('conformpass').value;
var Email = document.getElementById('email').value;
var mobileno = document.getElementById('mobileno').value;

var usercheck = /^[A-Za-z. ]{3,30}$/ ;
var passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/ ;
var emailcheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;
var mobilenocheck = /^(\+\d{1,3}[- ]?)?\d{10}$/ ;

if( usercheck.test(Username)){
document.getElementById('usererror').innerHTML = "";
}else {
document.getElementById('usererror').innerHTML = "**Please enter your username";
return false;
} 

if(passcheck.test(Password)){
document.getElementById('passworderror').innerHTML = "";
}else {
document.getElementById('passworderror').innerHTML = "**Please enter your password";
return false;
}
if(Conformpass.match(Password)){
document.getElementById('cpassworderror').innerHTML = "";
}else {
document.getElementById('cpassworderror').innerHTML = "** password is not matching";
return false;
}

if(emailcheck.test(Email)){
document.getElementById('emailerror').innerHTML = "";
}else {
document.getElementById('emailerror').innerHTML = "**Please enter your Email";
return false;
}

if( mobilenocheck.test(mobileno)){
document.getElementById('mobileerror').innerHTML = "";
}else {
document.getElementById('mobileerror').innerHTML = "**Please enter your Mobile no";
return false;
}

}

