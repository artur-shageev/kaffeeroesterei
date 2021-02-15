// const header = document.querySelector('.container')
// header.classList.add('dark')
import {handlerHeader} from './utils/handler'

handlerHeader()


const selector = document.querySelector('.formular-selector__placeholder')
const menu = document.querySelector('.formular-selector__menu')

selector.addEventListener('click', ()=>{
    // menu.classList.forEach((el)=>{
    //     if (el === 'formular-selector__menu-open') {
    //         menu.classList.remove('formular-selector__menu-open')
    //     }else{
    //         menu.classList.add('formular-selector__menu-open')
    //     }
    // }
    menu.classList.toggle('formular-selector__menu-open')
    console.log(menu);
    menu.style.height = menu.offsetHeight 
})

