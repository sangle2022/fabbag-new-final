import {header,fotter} from '../components/navbar.js'
document.getElementById('navbar').innerHTML=header();
document.getElementById('fotter').innerHTML=fotter();

  let nan = document.getElementById('hdoffer')

  let bbb= document.getElementById('bb');bbb.addEventListener('click',fyfun);

  function fyfun(){
   
  document.querySelector("#hdoffer").style.display = "none"

  }
