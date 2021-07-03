//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navigation.classList.toggle("active");
}

//sticky navigation
$(window).scroll(function(e){ 
    var $el = $('.navbar'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 150 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 150 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });


//footer validation
function validateName(){
  var name = document.getElementById('name').value;
  var input = /[a-zA-Z]{2,15}/;

  if (input.test(name)){
      document.getElementById("NamePrompt").style.color="green";
      document.getElementById("NamePrompt").style.fontWeight="bolder"
      document.getElementById("NamePrompt").innerHTML = "valid";
      return true;
  }

  else{
      document.getElementById("NamePrompt").style.color="red";
      document.getElementById("NamePrompt").innerHTML = "invalid";
      return false;
  }
}

function validateEmail(){
  var email = document.getElementById('email').value;
  var input = /[a-zA-Z0-9]{5,100}/;

  if (input.test(email)){
      document.getElementById("EmailPrompt").style.color="green";
      document.getElementById("EmailPrompt").style.fontWeight="bolder"
      document.getElementById("EmailPrompt").innerHTML = "valid";
      return true;
  }

  else{
      document.getElementById("EmailPrompt").style.color="red";
      document.getElementById("EmailPrompt").innerHTML = "invalid";
      return false;
  }
}

function validateMsg(){
  var msg = document.getElementById('msg').value;
  var input = /[a-zA-Z0-9]{1,100}/;

  if (input.test(msg)){
      document.getElementById("MsgPrompt").style.color="green";
      document.getElementById("MsgPrompt").style.fontWeight="bolder";
      document.getElementById("MsgPrompt").innerHTML = "valid";
      return true;
  }

  else{
      document.getElementById("MsgPrompt").style.color="red";
      document.getElementById("MsgPrompt").innerHTML = "invalid";
      return false;
  }
}