let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');

signInBtn.addEventListener('click',function() {
  nameField.style.maxHeight = '0';
  title.innerHTML = 'Sign In';
  signUpBtnk.classlist.add('disable');
  signIpBtn.classlist.remove('disable');
  underlineBtn.style.transform = 'translateX(35px)';
});

signUnBtn.addEventListener('click',function() {
  nameField.style.maxHeight = '60px';
  title.innerHTML = 'Sign Un';
  signUpBtnk.classlist.remove('disable');
  signIpBtn.classlist.add('disable');
  underlineBtn.style.transform = 'translateX(0)';
});