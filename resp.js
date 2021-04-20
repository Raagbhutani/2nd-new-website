var burger= document.querySelector('.burger')
var navigationbar= document.querySelector('.navigationbar')
var navigationlist= document.querySelector('.navigationlist')
var rightnav= document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
  rightnav.classList.toggle('v-class-resp');
  navigationlist.classList.toggle('v-class-resp');
  navigationbar.classList.toggle('h-nav-resp');
})
