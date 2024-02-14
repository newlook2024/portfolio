let resMenu = document.querySelector('.responsive-nav')
let burger = document.querySelector('.burger')
let yopish = document.querySelector('.close')
let contact = document.querySelector('#contact-page')
let ccc = document.querySelector('.ccc')
let contactBtn = document.querySelector('.contact-us')

burger.addEventListener('click', function(){
    resMenu.style.left = "0"
    yopish.style.left = "0"
})

yopish.addEventListener('click', function(){
    resMenu.style.left = "-100%"
    yopish.style.left = "-100%"
})

contactBtn.addEventListener("click", function(){
    contact.style.display = 'flex'
    ccc.style.display = 'flex'
})

ccc.addEventListener('click', function(){
    contact.style.display = 'none'
})