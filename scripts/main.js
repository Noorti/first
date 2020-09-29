
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lb_flag_01.png') {
      myImage.setAttribute('src','images/firefox-icon.png');
    } else {
      myImage.setAttribute('src','images/lb_flag_01.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Lebanon is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lebanon is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  const para = document.querySelector('p');

    para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
    }