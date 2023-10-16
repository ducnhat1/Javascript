var btnOpen = document.querySelector(".open-modal-btn")
var modal = document.querySelector(".modal")
var iconClose = document.querySelector(".modal__header i")
var btnClose = document.querySelector(".modal__footer button")


function toogleModal(e){    
    modal.classList.toggle("hidden")
}
btnOpen.addEventListener('click', toogleModal)
iconClose.addEventListener('click', toogleModal)
btnClose.addEventListener('click',toogleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toogleModal()
    }
})