let resMenu = document.querySelector('.responsive-nav')
let burger = document.querySelector('.burger')
let yopish = document.querySelector('.close')

burger.addEventListener('click', function(){
    resMenu.style.left = "0"
    yopish.style.left = "0"
})

yopish.addEventListener('click', function(){
    resMenu.style.left = "-100%"
    yopish.style.left = "-100%"
})