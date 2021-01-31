const headerBurger = document.querySelector('.header__burger').children[0]
const menuWrapper = document.querySelector('.menu__wrapper')
const menuClose = document.querySelector('.menu__close')

console.log(headerBurger);

headerBurger.addEventListener('click', (e)=>{
    console.log(e);
    menuWrapper.classList.remove('none')
})

menuClose.addEventListener('click', ()=>{
  menuWrapper.classList.add('none')  
})

