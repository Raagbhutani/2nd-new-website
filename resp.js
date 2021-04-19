burger= document.querySelection('.burger')
navigation-bar= document.querySelection('.navigaiton-bar')
navigation-list= document.querySelection('.navigation-list')
right-nav= document.querySelection('.right-nav')\

burger.addEventListner('click',()=>{
  right-nav.classList.toggle('v-class-resp');
  navigation-list.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})
