let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicatitor = document.querySelector('.indicators')
let dots = indicatitor.querySelectorAll('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1
/*1:17 */

/* função criada para não repetir o código várias vezes */
function setSlider() {

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active') /*vai procurar quem ta ativo e vai remover*/

    /* troca dos dots */
    let dotsOld = indicatitor.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicatitor.querySelector('.number').innerHTML = '0' + (active + 1)

}

/*dots */

nextButton.onclick = () => {

    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}



prevButton.onclick = () => {

    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}