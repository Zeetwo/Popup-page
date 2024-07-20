const buttonON =document.querySelector('button')
const popUp =document.querySelector('.popup-container')
const closeIcon =document.querySelector('.close-icon')
const overLay =document.querySelector('.overlay')


buttonON.addEventListener('click', () =>{
    popUp.classList.add ('popup-open')
})

closeIcon.addEventListener('click', () =>{
    popUp.classList.remove ('popup-open')
})

overLay.addEventListener('click', () =>{
    popUp.classList.remove ('popup-open')
})
