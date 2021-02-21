import {handlerHeader} from '../utils/handler'

handlerHeader()



const productsCard = document.querySelectorAll('.products__card')

// [1,2,3,4,5];
// console.log(productsCard);
productsCard.forEach((card)=>{
    card.addEventListener('click', () => {
        // window.location.replace('details.html')
        window.location.href = 'details.html'

        // console.log('clcked to crad');
    })
})