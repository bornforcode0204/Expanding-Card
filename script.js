const pannels = document.querySelectorAll('.pannel');

pannels.forEach( (pannel) => {
    pannel.addEventListener('click', () => {
        removeActiveClass()
        pannel.classList.add('active')
    })
})
      
function removeActiveClass() {
    pannels.forEach( pannel => {
        pannel.classList.remove('active')
    })
}
