var example = [];
for (let i = 0; i < 5; i++) {
  example[i] = document.querySelectorAll('p')[i];
}

var validForm = [];

for (let i = 0; i < 5; i++) {
  validForm[i] = false;
}

//name
function nameAdd() {
  example[0].classList.add('example');
  example[0].innerHTML = 'Иван';
}

function nameRemove() {
  example[0].classList.remove('example');
  example[0].innerHTML = '';
}

function nameCheck() {
  let myName = document.getElementById('name').value;
  let re = /^[а-я]{1,}$/;
  validForm[0] = re.test(myName);
  let name = document.getElementById('name');
  
  if (!validForm[0] && myName != '') {
    
    example[0].classList.add('example');
    example[0].innerHTML = 'Введите првильное имя, без пробелов';

    name.style.border = '2px solid #d90000';
    name.style.backgroundColor = '#eb7373';

  } else {

    example[0].classList.remove('example');
    example[0].innerHTML = '';

    name.style = '';

  }
}

//login
function loginAdd() {
  example[1].classList.add('example');
  example[1].innerHTML = 'Ivan82';
}

function loginRemove() {
  example[1].classList.remove('example');
  example[1].innerHTML = '';
}

function loginCheck() {
  let myLogin = document.getElementById('login').value;
  let re = /^[\w-]{1,}$/;
  validForm[1] = re.test(myLogin);
  let login = document.getElementById('login');
  
  if (!validForm[1] && myLogin != '') {
    
    example[1].classList.add('example');
    example[1].innerHTML = 'Логин может содержать английские буквы, цифры, "_" и "-"';

    login.style.border = '2px solid #d90000';
    login.style.backgroundColor = '#eb7373';

  } else {

    example[1].classList.remove('example');
    example[1].innerHTML = '';

    login.style = '';

  }
}

//email
function emailAdd() {
  example[2].classList.add('example');
  example[2].innerHTML = 'ivan82@gmail.com';
}

function emailRemove() {
  example[2].classList.remove('example');
  example[2].innerHTML = '';
}

function emailCheck() {
  let re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  let myEmail = document.getElementById('email').value;
  validForm[2] = re.test(myEmail);
  let email = document.getElementById('email');
  
  if (!validForm[2] && myEmail != '') {
    
    example[2].classList.add('example');
    example[2].innerHTML = 'Введите корректный алрес эл. почты';

    email.style.border = '2px solid #d90000';
    email.style.backgroundColor = '#eb7373';

  } else {

    example[2].classList.remove('example');
    example[2].innerHTML = '';

    email.style = '';

  }
}

//passwords
function generate(len)
{
  var ints  = [0,1,2,3,4,5,6,7,8,9]; 
  var chars = ['a','b','c','d','e','f','g','h','j','k','l','m','n',
              'o','p','r','s','t','u','v','w','x','y','z'];
  var out = '';
    for(var i=0;i<len;i++){
        var ch=Math.random(1,2);
        if(ch<0.5){
           var ch2=Math.ceil(Math.random(1,ints.length)*10);
           out+=ints[ch2];
        }else{
           var ch2=Math.ceil(Math.random(1,chars.length)*10);
           out+=chars[ch2];            
        }
    }
    return out;
}
var passGenerate = generate(12);

function passwordAdd() {
  example[3].classList.add('example');
  example[3].innerHTML = passGenerate;
}

function passwordRemove() {
  example[3].classList.remove('example');
  example[3].innerHTML = '';
}

function passCheck() {
  let pass = document.getElementById('password');
  let passRepeat = document.getElementById('passwordRepeat');

  if (pass.value.length < 4 && pass.value != '') {

    pass.style.border = '2px solid #d90000';
    pass.style.backgroundColor = '#eb7373';

    example[3].classList.add('example');
    example[3].innerHTML = 'Пароль должен быть минимум из 4 цифр';
    
    validForm[3] = false;

  } else {

    pass.style = '';

    example[3].classList.remove('example');
    example[3].innerHTML = '';
    
    if (pass.value != '') {
      validForm[3] = true;
    } else {
      validForm[3] = false;
    }

  }

  if (pass.value != passRepeat.value && pass.value != '' && passRepeat.value != '') {

    passRepeat.style.border = '2px solid #d90000';
    passRepeat.style.backgroundColor = '#eb7373';
  
    example[4].classList.add('example');
    example[4].innerHTML = 'Пароли не совпадают';

    validForm[4] = false;

  } else {

    passRepeat.style = '';

    example[4].classList.remove('example');
    example[4].innerHTML = '';

    if (pass.value != '' && passRepeat.value != '') {
      validForm[4] = true;
    } else {
      validForm[4] = false;
    }

  }

  document.getElementsByClassName('pass')[0].style.display = 'block';
  document.getElementsByClassName('pass')[0].setAttribute('onmouseover', 'passwordAdd()');
  pass.setAttribute('onmouseover', 'passwordAdd()')
}

function insert() {
  let pass = document.getElementById('password');
  pass.value = passGenerate;
  passwordRemove();
  pass.removeAttribute('onmouseover');
  document.getElementsByClassName('pass')[0].removeAttribute('onmouseover');
  document.getElementsByClassName('pass')[0].style.display = 'none';
  let passRepeat = document.getElementById('passwordRepeat');
  passRepeat.value = passGenerate;
  passRepeat.style = '';
  validForm[3] = true;
  validForm[4] = true;
}

//send
function send() {

  for (let i = 0; i < 5; i++) {
    
    if (validForm[i] == false) {
    
      switch (i) {
        case 0: {
          if (document.getElementById('name').value) {
            alert('Введите првильное имя, без пробелов');
          } else {
            alert('Вы не ввели имя');
          }
          break;
        }
        case 1: {
          if (document.getElementById('login').value) {
            alert('Логин может содержать английские буквы, цифры, "_" и "-"');
          } else {
            alert('Вы не ввели логин');
          }
          break;
        }
        case 2: {
          if (document.getElementById('email').value) {
            alert('Введите корректный алрес эл. почты');
          } else {
            alert('Вы не ввели E-mail');
          }
          break;
        }
        case 3: {
          if (document.getElementById('password').value) {
            alert('Пароль должен быть минимум из 4 цифр');
          } else {
            alert('Вы не ввели пароль');
          }
          break;
        }
        case 4: {
          if (document.getElementById('passwordRepeat').value) {
            alert('Пароли не совпадают');
          }  else {
            alert('Вы не ввели пароль повторно');
          }         
          break;
        }
      }
      break;
    
    } else if (i == 4) {
      document.location.href = "survey.html";
    }
  }

}

//survey
function check() {
  let q1, r1, q2, r2=[], q3, res = 0;

  for (let i = 0; i < 4; i++) {
    q1 = document.getElementsByName('q1')[i];
    if (q1.checked) r1 = q1.value;

    r2[i] = 0;
    q2 = document.getElementsByName('q2')[i];
    if (q2.checked) r2[i] = q2.value;

    q3 = document.getElementsByName('q3')[0].value;
  }
  
  if (r1 == 4) {
    res++;
  }
  
  if (r2[0] == 0 && r2[1] == 2 && r2[2] == 3 && r2[3] == 0) {
    res += 2;
  } else if (r2[0] == 0 && r2[1] == 2 && r2[2] == 0 && r2[3] == 0 ||
             r2[0] == 0 && r2[1] == 0 && r2[2] == 3 && r2[3] == 0 ||
             r2[0] == 1 && r2[1] == 2 && r2[2] == 0 && r2[3] == 0 ||
             r2[0] == 0 && r2[1] == 2 && r2[2] == 0 && r2[3] == 4 ||
             r2[0] == 1 && r2[1] == 0 && r2[2] == 3 && r2[3] == 0 ||
             r2[0] == 0 && r2[1] == 0 && r2[2] == 3 && r2[3] == 4) {
    res++;
  }

  if (q3 == 3.5 || q3 == '3,5') {
    res += 2;
  }
  
  
  document.querySelector('button').style.display = 'none';
  let assessment = document.getElementById('assessment');
  res = (res < 2) ? 2 : res;
  document.getElementById('assessmentText').style.display = 'inline';
  assessment.innerHTML = res;
  switch (res) {
    case 2: assessment.style.backgroundColor = "red"; break;
    case 3: assessment.style.backgroundColor = "orange"; break;
    case 4: assessment.style.backgroundColor = "#d6d300"; break;
    case 5: assessment.style.backgroundColor = "green"; break;
  }
  
}

window.addEventListener('keydown', function (e){
  if (e.keyCode == 13) send();
});

// answer
//   1 - 4
//   2 - 2, 3
//   3 - 3.5